import { IImage } from "../models/image.interface";

export interface IDestination {
  name: string;
  images: IImage;
  description: string;
  distance: string;
  travel: string;
}
