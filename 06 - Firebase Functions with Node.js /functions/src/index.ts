import * as functions from 'firebase-functions';
const admin = require('firebase-admin');
admin.initializeApp()

const spawn = require('child-process-promise').spawn;
const path = require('path');
const os = require('os');
const fs = require('fs');

/**
 * When an image is uploaded in the Storage bucket We generate a thumbnail automatically using
 * ImageMagick.
 */
exports.generateThumbnail = functions.storage.object().onFinalize(async (object) => {
   const { bucket: fileBucket, name, contentType = ''} = object;
   if (!contentType.startsWith('image/')) {
      return console.log('This is not an image.');
   }

   const fileName: string = path.basename(name);
   // Exit if the image is already a thumbnail.
   if (fileName.startsWith('thumb_')) {
      return console.log('Already a Thumbnail.');
   }

   const bucket = admin.storage().bucket(fileBucket);
   const tempFilePath: string = path.join(os.tmpdir(), fileName);
   const metadata = {
      contentType: contentType,
   };
   await bucket.file(name).download({destination: tempFilePath});
   console.log('Image downloaded locally to', tempFilePath);
   // Generate a thumbnail using ImageMagick.
   await spawn('convert', [tempFilePath, '-thumbnail', '200x200>', tempFilePath]);
   console.log('Thumbnail created at', tempFilePath);
   // We add a 'thumb_' prefix to thumbnails file name. That's where we'll upload the thumbnail.
   const thumbFileName = `thumb_${fileName}`;
   const thumbFilePath = path.join(path.dirname(name), thumbFileName);
   // Uploading the thumbnail.
   await bucket.upload(tempFilePath, {
      destination: thumbFilePath,
      metadata: metadata,
   });
   // Once the thumbnail has been uploaded delete the local file to free up disk space.
   return fs.unlinkSync(tempFilePath);
});