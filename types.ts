export interface ICategory {
  title_ar: string;
  title_en: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}
export interface ICategoryWithServices extends ICategory {
  services: IService[];
}
export interface IService {
  images: string[];
  highlights_ar: string[];
  highlights_en: string[];
  description_ar: string;
  description_en: string;
  title_ar: string;
  title_en: string;
  imageCover: string;
  category: ICategory;
  _id: string;
  createdAt: string;
  updatedAt: string;
}
export interface ISample {
  images: string[];
  description_ar: string;
  description_en: string;
  title_ar: string;
  title_en: string;
  imageCover: string;
  service: IService;
  _id: string;
  createdAt: string;
  updatedAt: string;
}
