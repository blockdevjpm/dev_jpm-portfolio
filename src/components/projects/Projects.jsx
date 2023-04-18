import React from 'react';
import "./projects.css";

import { Learnt, ProjectCards } from "../../containers";
import img11 from "../../images/gpt3_website.png";
import img12 from "../../images/img12.png";
import dataset from "./dataset.js";

const Projects = () => {

  const skills = dataset.allSkills.map(i => <Learnt topic={i} />)

  return (
    <div className='projects'>
      <div className='skills_container'> 
        {skills}
    </div>
    <div className='projects_container'> 
    <ProjectCards 
        website= "https://gpt3aimodernwebsite.netlify.app/"
        image= {img11}
        source= "https://github.com/blockdevjpm/gpt3_ai_modern_website.git"
        title= "Modern GPT-3 UI/UX Website"
    />
    <ProjectCards 
        website= "https://restaurantuiux.netlify.app/"
        image= {img12}
        source= "https://github.com/blockdevjpm/restaurant_ui_ux.git"
        title= "Restaurant Landing Page"
    />
    </div>
    </div>
  )
}

export default Projects