import React from 'react';

interface IBreadcrumbs {
    crumbs: string[];
}

const Breadcrumbs: React.FC<IBreadcrumbs> = ({ crumbs }) => {
  return (
    <div className="breadcrumbs container">
        {crumbs.map((elem, index) => index === crumbs.length - 1 ?
            <span className="breadcrumbs__crumb" key={index}>{elem}</span>
            : <a href="#" className="breadcrumbs__parent" key={index}>{elem}</a>
        )}
    </div>
  )
}

export default Breadcrumbs;
