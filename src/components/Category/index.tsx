import React from 'react';
import classNames from 'classnames';

interface ICategory {
    category: string;
    onClick: () => void;
    isActive: boolean;
}

const Category: React.FC<ICategory> = ({ category, onClick, isActive }) => {
  const categoryClass = classNames({
    category: true,
    'category--active': isActive,
  })

  return (
    <div className={categoryClass} onClick={onClick}>{category}</div>
  )
}

export default Category;
