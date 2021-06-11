import { ICategory, IProduct, ISubCategory } from '@/common/interfaces';

import { categories, subcategories, products } from '@/api/fakeData';

export const fetchCategories = async (): Promise<ICategory[]> => {
  const promise = new Promise<ICategory[]>((resolve) => {
    setTimeout(() => resolve(categories), 1000);
  });

  return promise;
};

export const fetchSubCategories = async (categoryId: number): Promise<ISubCategory[]> => {
  const promise = new Promise<ISubCategory[]>((resolve) => {
    setTimeout(() => resolve(subcategories.filter((sc) => sc.categoryId === categoryId)), 2000);
  });

  return promise;
};

export const fetchProductsByCategory = async (categoryId: number): Promise<IProduct[]> => {
  const promise = new Promise<IProduct[]>((resolve) => {
    setTimeout(
      () => resolve(
        Object.values(products).filter((pr) => pr.categoryId === categoryId),
      ), 2000,
    );
  });

  return promise;
};

export const fetchProductsBySubCategory = async (subcategoryId: number): Promise<IProduct[]> => {
  const promise = new Promise<IProduct[]>((resolve) => {
    setTimeout(
      () => resolve(
        Object.values(products).filter((pr) => pr.subcategoryId === subcategoryId),
      ), 2000,
    );
  });

  return promise;
};

export const fetchProduct = async (productId: number): Promise<IProduct> => {
  const promise = new Promise<IProduct>((resolve) => {
    setTimeout(() => resolve(products[productId]), 2000);
  });

  return promise;
};
