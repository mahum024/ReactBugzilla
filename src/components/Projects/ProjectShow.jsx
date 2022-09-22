import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import UsersInProject from './UsersInProject';
import { Link } from 'react-router-dom';
import RecordNotFound from '../shared/errors/RecordNotFound';
import {ProjectShowPage} from '../../services/Projects/ProjectUrls.js';
const ProjectShow = () => {
  let { id } = useParams();
  const [project, setProject] = useState([]);
  const [dataPresent, setData] = useState(false);
  
  useEffect(() => {
    ProjectShowPage(id)
    .then((response) => {
      setProject(response);
      setData(true)
    })
    .catch((error) => {
      console.log(error);
      setData(false)
    });

   }, [id])

  if (dataPresent) {

    return (
      <div className='ProjectDetail SingleProject'>
        <div className='Top'>
          <span><h1>Project Details</h1></span>
          <button type="button" className="btn btn-primary Back"><Link to={`/`} > {'Back to Projects List'}</Link></button>
        </div>
      <div className='Project'>
      <p>
        ID: <span>  {project.id}</span>
      </p>
      <p>
        Name: <span> {project.name}</span>
      </p>
      </div>
        <UsersInProject user = { project.users} />
        <li><button type="button" className="btn btn-primary BugsBtn"><Link to={`/projects/${project.id}/bugs`} >See Bugs</Link></button></li>
      </div>
    );
  } 
  else if(!dataPresent){

    return (
      <div>
       <RecordNotFound />
      <div className='Top'>
      <button type="button" className="btn btn-primary Back"><Link to={`/`} > {'Back to Projects List'}</Link></button>
      </div>
    </div>
    )
  }
}

export default ProjectShow

