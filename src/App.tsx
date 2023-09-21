import React from 'react';
import Projects from './components/Projects';
import Contact from './components/Contact';
import DefaultLayout from './layouts/DefaultLayout';

const App: React.FC = () => {
  return (
    <DefaultLayout>
      <>
        <Projects />
        <Contact />
      </>
    </DefaultLayout>
  )
}

export default App