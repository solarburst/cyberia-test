import React, { useEffect, useState } from 'react';
import Card from '../Card';
import { useStore } from '../../mobx/store';
import { observer } from 'mobx-react';
import Category from '../Category';

const CardListComponent: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const store = useStore();

  useEffect(() => {
    store.categoriesStore.fetchCategories();
    store.projectsStore.fetchProjects();
  }, []);

  const handleOnClick = (id: number) => {
    activeCategory === id ? setActiveCategory(null) : setActiveCategory(id);
  }

  return (
    <>
        <div className="categories">
            {store.categoriesStore.categories.map(category =>
                <Category
                    key={category.id}
                    category={category.name}
                    onClick={() => handleOnClick(category.id)}
                    isActive={activeCategory === category.id}
                />)}
        </div>
        <div className="list">
            {
                activeCategory ?
                store.projectsStore.getProjectsByCategoryId(activeCategory).map(
                    project => <Card information={project} key={project.id} />
                ) :
                store.projectsStore.projects.map(project => <Card information={project} key={project.id} />)
            }
        </div>
    </>
  )
}

export const CardList = observer(CardListComponent);
