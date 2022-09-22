import React from 'react'
import { Link } from 'react-router-dom';

const Project = ({ project }) =>
    <div className="ProjectDetail" key={project.id} >
        <ul className="ProjectData" >
            
            <li className="Data"> <p> ID: <span> {project.id} </span></p>  </li>
            <li className="Data"><p> Name: <span> {project.name} </span></p>  </li>
            <li><button type="button" className="btn btn-primary Data"><Link to = {`/projects/${project.id}`} >{'Show Project Details'}</Link></button>
           </li>
        </ul>
    </div>

export default Project