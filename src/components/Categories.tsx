import React, { useEffect, useState } from 'react';
import { CategoriesType } from '../types/type';
import { getCategories } from '../services/api';

function Categories() {
  const [categoriesList, setCategoriesList] = useState<CategoriesType[]>([]);

  useEffect(() => {
    const getCategoriesList = async () => {
      const data = await getCategories();
      setCategoriesList(data);
    };

    getCategoriesList();
  }, []);
  return (
    <div>
      {categoriesList.map((category) => (
        <button
          key={ category.id }
          data-testid="category"
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default Categories;
