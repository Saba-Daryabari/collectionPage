export type Variant = {
  id: number;
  name: string;
  price: number;
  stock: number;
  color: {
    name: string;
    hex?: string;
  };
  images: string[];
};

export type Product = {
  id: number;
  name: string;
  mainImage: string;
  price: number;
  variants: Variant[];
};
