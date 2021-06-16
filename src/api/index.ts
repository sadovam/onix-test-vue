import {
  ICategory, IProduct, IProductTmb, ISubCategory,
} from '@/common/interfaces';
import categories from './fakeData/categories';
import products from './fakeData/products';
import subcategories from './fakeData/subcategories';

export const fetchCategories = async (): Promise<ICategory[]> => {
  const promise = new Promise<ICategory[]>((resolve) => {
    setTimeout(() => resolve(categories), 1000);
  });

  return promise;
};

export const fetchSubCategories = async (categoryId: number): Promise<ICategory[]> => {
  const promise = new Promise<ICategory[]>((resolve) => {
    setTimeout(() => resolve(
      subcategories.reduce((acc: ICategory[], sc: ISubCategory): ICategory[] => {
        if (sc.categoryId === categoryId) {
          acc.push({ id: sc.id, title: sc.title, image: sc.image });
        }
        return acc;
      }, []),
    ), 1000);
  });

  return promise;
};

export const fetchProductsByCategory = async (categoryId: number): Promise<IProductTmb[]> => {
  const promise = new Promise<IProductTmb[]>((resolve) => {
    setTimeout(
      () => resolve(
        Object.values(products).reduce((acc: IProductTmb[], pr: IProduct) => {
          if (pr.categoryId === categoryId) {
            acc.push({
              id: pr.id, title: pr.title, image: pr.image, price: pr.price,
            });
          }
          return acc;
        }, []),
      ), 1000,
    );
  });

  return promise;
};

export const fetchProductsBySubCategory = async (categoryId: number): Promise<IProductTmb[]> => {
  const promise = new Promise<IProductTmb[]>((resolve) => {
    setTimeout(
      () => resolve(
        Object.values(products).reduce((acc: IProductTmb[], pr: IProduct) => {
          if (pr.subcategoryId === categoryId) {
            acc.push({
              id: pr.id, title: pr.title, image: pr.image, price: pr.price,
            });
          }
          return acc;
        }, []),
      ), 1000,
    );
  });

  return promise;
};

export const fetchProduct = async (productId: number): Promise<IProduct> => {
  const promise = new Promise<IProduct>((resolve) => {
    setTimeout(() => resolve(products[productId]), 1000);
  });

  return promise;
};

export const fetchCategory = async (categoryId: number): Promise<ICategory> => {
  const promise = new Promise<ICategory>((resolve) => {
    setTimeout(() => resolve(categories[categoryId]), 1000);
  });

  return promise;
};

export const fetchSubCategory = async (subcategoryId: number): Promise<ICategory> => {
  const promise = new Promise<ICategory>((resolve) => {
    setTimeout(() => resolve(subcategories[subcategoryId]), 1000);
  });

  return promise;
};
