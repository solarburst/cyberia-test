import React from 'react';
import { ReactComponent as CardLogo } from '../../assets/svg/card.svg';
import { ProjectsResponseDTO } from '../../api/dto/projects.dto';

interface ICard {
    information: ProjectsResponseDTO;
}

const Card: React.FC<ICard> = ({ information }) => {
  return (
    <a href="#" className="card">
        <img src={information.image_dark} alt="Background" className="card__background" />
        <div className="card__info">
            <CardLogo />
            <h3 className="card__info-title">{information.title}</h3>
            <p className="card__info-description">{information.description}</p>
        </div>
    </a>
  )
}

export default Card;
