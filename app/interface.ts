export interface Products {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  categoryName: string;
  slug: string;
  sponsored?: boolean;
  onSale?: boolean;
  salePrice?: number
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