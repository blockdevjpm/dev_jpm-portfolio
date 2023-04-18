import React from 'react';
import './project_cards.css';
import { FaCode } from 'react-icons/fa';

const ProjectCards = (props) => {
  return (
    <div className='project_card'>
      <a href={props.website} target="_blank" rel='noreferrer'>
        <img src={props.image} alt="img" className='project_card_img' />
      </a>
      <a href={props.source} target="_blank" rel="noreferrer" >
        <FaCode color='white' size={25} className='project_code' />
      </a>
      <p className='project_card_title'>{props.title}</p>
    </div>
  )
}

export default ProjectCards