import { ICategory } from '@/common/interfaces';

const fetchCategories = async (): Promise<ICategory[]> => {
  console.log('fetch cuts');
  const promise = new Promise<ICategory[]>((resolve) => {
    setTimeout(() => resolve([
      { id: 0, title: 'Category 0', tmb: 'tmb0.jpg' },
      { id: 1, title: 'Category 1', tmb: 'tmb1.jpg' },
      { id: 2, title: 'Category 2', tmb: 'tmb2.jpg' },
      { id: 3, title: 'Category 3', tmb: 'tmb3.jpg' },
      { id: 4, title: 'Category 4', tmb: 'tmb4.jpg' },
      { id: 5, title: 'Category 5', tmb: 'tmb5.jpg' },
      { id: 6, title: 'Category 6', tmb: 'tmb6.jpg' },
      { id: 7, title: 'Category 7', tmb: 'tmb7.jpg' },
      { id: 8, title: 'Category 8', tmb: 'tmb8.jpg' },
      { id: 9, title: 'Category 9', tmb: 'tmb9.jpg' },
    ]), 1000);
  });

  return promise;
};

export default fetchCategories;
