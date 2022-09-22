import React from 'react'
// import BugsList from './BugsList.jsx';
// import BugsList from './Bugs/BugsList.jsx';
// import BugsShow from './Bugs/BugsShow.jsx';
import UsersInProject from '../Projects/UsersInProject.jsx';
import PageNotFound from './errors/PageNotFound.js';
// import ProjectList from './ProjectList.jsx';
// import ProjectShow from './ProjectShow.jsx';
import ProjectList from '../Projects/ProjectList.jsx';
import ProjectShow from '../Projects/ProjectShow.jsx';
import BugsList from '../Bugs/BugsList.jsx';

import { BrowserRouter, Route , Routes} from 'react-router-dom';

const Paths = () => 
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<ProjectList/>}/>
            <Route path="/projects/:id" element={<ProjectShow/>}/>
            <Route path="/projects/:id/bugs" element={<BugsList/>}/>
            {/* <Route path="/projects/:id/bugs/:id1" element={<BugsShow/>}/> */}
            <Route path="/projects/:id/userInProject" element={<UsersInProject/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>

export default Paths


