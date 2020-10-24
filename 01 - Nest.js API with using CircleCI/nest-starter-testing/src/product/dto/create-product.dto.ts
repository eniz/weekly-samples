import { IsString, IsNumber } from 'class-validator';

/*
A data transfer object (DTO) helps to create and validate a proper data structure for data coming into an application.
For example, whenever you send an HTTP POST request from the front end to a Node.js back end,
you need to extract the content posted from the form and parse it into a format that your back end code can easily consume.
DTO helps to clearly specify shapes of objects extracted from the body of a request when communicating with the back end,
and provides a way to plug in validation with little effort.
 */

export class CreateProductDTO {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;
}