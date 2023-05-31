import { IImage } from "../models/image.interface";

export interface ICrew {
  name: string;
  images: IImage;
  role: string;
  bio: string;
}
