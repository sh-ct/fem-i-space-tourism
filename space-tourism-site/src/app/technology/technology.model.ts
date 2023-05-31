import { IOrientedImage } from "../models/image.interface";

export interface ITechnology {
  name: string;
  images: IOrientedImage;
  description: string;
}
