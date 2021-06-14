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
}

export interface IProductTmb {
  id: number,
  title: string,
  image: string,
}

export interface IProducts {
  [index: number]: IProduct,
}
