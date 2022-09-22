import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {BugIndex} from '../../services/Bugs/BugsUrls';

const BugsList = () => {
  let { id } = useParams();
  const [bugs, setBugs] = useState([]);
 
  useEffect(() => {
    BugIndex(id)
    .then((response) => {
      console.log(response);
      console.log(response.data);
      setBugs(response);
    })
    .catch((error) => {
      console.log(error);
    });

  }, [id])
  
  return (
    <div className='BugIndex'>
      <div className='Top Top1'>
        <span><h1 className='BugListHeading'>Bugs Listing</h1></span>

        <button type="button" className="btn btn-primary Back"><Link to={`/projects/${id}`} > {'Back to Project Show'}</Link></button>
      </div>
      <div className='ProjectDiv'>

        {bugs.map((bug) => {
          return (


            <div className="ProjectDetail" key={bug.id} >

              <ul className="ProjectData" >
                <li className="TileData"><p>ID:<span>{bug.id}</span></p> </li>
                <li className="TileData"><p>Title:<span>{bug.title}</span></p> </li>
               </ul>
            </div>
          )
        })}


      </div>
    </div>
  );
}

export default BugsList

