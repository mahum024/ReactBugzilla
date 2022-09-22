import React, { useState, useEffect } from 'react'
import Project from './Project.jsx';
import {ProjectIndex} from '../../services/Projects/ProjectUrls.js';


const ProjectList = () => {
    
    const[projects, setProjects] = useState([]);

    useEffect(() => {
     ProjectIndex()
      .then((response) => {
      
        setProjects(response);
      })
      .catch((error) => {
        console.log(error);
      });
    }, [])
   
    return(
      <div >
        <h1 className='ProjectShowHeading'>Projects Listing</h1>
        <div className='ProjectDiv'>
          
          {projects.map((project) => {
            return(
                <Project project={project} key={project.id} />
            )       
          })}
        </div>
      </div>
    );
}

export default ProjectList

