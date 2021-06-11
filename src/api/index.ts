import { ICategory, ISubCategory } from '@/common/interfaces';

import { categories, subcategories } from '@/api/fakeData';

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
