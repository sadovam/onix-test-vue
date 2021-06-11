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
