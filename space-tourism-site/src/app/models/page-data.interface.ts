import { IImage, IOrientedImage } from "./image.interface";

export interface IPageData {
  name: string;
  images: IImage|IOrientedImage;
  description?: string;
  distance?: string;
  travel?: string;
  role?: string;
  bio?: string;
}
