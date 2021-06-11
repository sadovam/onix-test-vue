export interface ICategory {
  id: number,
  title: string,
  tmb: string,
}

export interface ISubCategory {
  id: number,
  title: string,
  tmb: string,
  categoryId: number,
}

export interface IProduct {
  id: number,
  title: string,
  tmb: string,
  categoryId: number,
  subcategoryId: number,
}

export interface IProducts {
  [index: number]: IProduct,
}
