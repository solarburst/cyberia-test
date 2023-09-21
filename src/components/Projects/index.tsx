import React from 'react';
import { CardList } from '../CardList';
import Breadcrumbs from '../Breadcrumbs';

const Projects: React.FC = () => {
  return (
    <main className="projects container">
      <Breadcrumbs crumbs={['Главная', 'Проекты']} />
      <h2 className="projects__title">Проекты</h2>
      <CardList />
    </main>
  )
}

export default Projects;
