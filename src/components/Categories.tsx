import React, { useEffect, useState } from 'react';
import { CategoriesType } from '../types/type';
import { getCategories } from '../services/api';

type CategoriesProps = {
  handleCategoryClick: (categoryId:string) => void
};

function Categories(props: CategoriesProps) {
  const { handleCategoryClick } = props;
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
          onClick={ () => handleCategoryClick(category.id) }
          key={ category.id }
          name={ category.id }
          data-testid="category"
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default Categories;
