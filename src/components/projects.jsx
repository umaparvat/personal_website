import React from "react";
import {Link, Routes, Route} from 'react-router-dom';

const Projects = ({match})=>{
    console.log(match)
    return(
        <div>
            <ul>
                <li>
                    <Link to={match.url+"/gameProject"}>Game Project</Link>
                </li>
                <li>
                    <Link to={match.url+"/react_project"}>React Project</Link>
                </li>
                <li>
                    <Link to={match.url+ "/database_project"}>Database project</Link>
                </li>
                <li>
                    <Link to={match.url+"/machine_learning_project"}>Machine Learning Project</Link>
                </li>
            </ul>
            <Routes>
                <Route path={match.url+"/:projectName"} render={({match})=> <div>{match.params.projectName}</div>}/>
                <Route exact path={match.url} render={()=> <div>Pick a project to view</div>}/>
            </Routes>
        </div>
    )

}

export default Projects;