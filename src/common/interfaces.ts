export interface ICategory {
  id: number,
  title: string,
  image: string,
}

export interface ISubCategory {
  id: number,
  title: string,
  image: string,
  categoryId: number,
}

export interface IProduct {
  id: number,
  title: string,
  image: string,
  categoryId: number,
  subcategoryId: number,
  description: string,
  price: number,
}

export interface IProductTmb {
  id: number,
  title: string,
  image: string,
  price: number,
}

export interface IProducts {
  [index: number]: IProduct,
}

export interface ICartPosition {
  product: IProduct,
  num: number,
}

export interface IBreadCrumbs {
  category: ICategory | null,
  subcategory: ICategory | null,
  product: IProduct | null,
}

export interface IOrder {
  name: string,
  address: string,
  zip: string,
  phone: string,
  delivery: string,
  cardNumber: string,
  expDay: string,
  sequrityCode: string,
}
