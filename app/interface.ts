export interface Products {
  _id: string;
  name: string;
  imageUrl: string
  price: number;
  categoryName: string;
  slug:string;

}

export interface SingleProduct {
  _id: string;
  images: any;
  name: string;
  price: number;
  categoryName: string;
  slug: string;
  description: string;

}