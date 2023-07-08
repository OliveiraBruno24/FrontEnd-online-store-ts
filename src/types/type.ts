export type CategoriesType = {
  id: string,
  name: string,
};

export type ProductDetails = {
  id: string,
  title: string,
  thumbnail: string,
  price: number,
  available_quantity: number,
};

// export type ProductDetailsWithQuantity = {
//   id: string,
//   title: string,
//   thumbnail: string,
//   price: number,
//   quantity: number
// };

export interface ProductDetailsWithQuantity extends ProductDetails {
  quantity: number;
}
