# Firebase Functions With Node.js Web Development

A quickstart for Firebase SDK for Cloud Functions 

## Initial setup, build tools and dependencies

1. Create a Firebase project on the [Firebase Console](https://console.firebase.google.com)
2. Install the Firebase CLI and enable Functions on your Firebase CLI

    ```bash
    npm install -g firebase-tools
    ```
3. Build 

    ```bash
    npm run serve
    ```
   
## Functions Code

See file [functions/index.js](functions/index.js) for the thumbnail generation code.

The thumbnail generation is performed using ImageMagick which is installed by default on all Cloud Functions instances. This is a CLI so we execute the command from node using the [child-process-promise](https://www.npmjs.com/package/child-process-promise) package. The image is first downloaded locally from the Cloud Storage bucket to the `tmp` folder using the [google-cloud](https://github.com/GoogleCloudPlatform/google-cloud-node) SDK.