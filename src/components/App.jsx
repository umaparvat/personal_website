import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './navbar';
import About from './About';
import Resume from './Resume';
import Error from './Error';
import Projects from './projects';
import Contacts from './contact';


function App(props) {
    return(

            <BrowserRouter>
                <div>
                    <NavBar/>
                    <Routes>
                        <Route path='/' element={<About/>}/>
                        <Route path='resume' element={<Resume/>}/>
                        <Route path='about' element={<About/>}/>
                        <Route path='projects' element={<Projects/>}/>
                        <Route path='contact' element={<Contacts/>}/>
                        <Route Component={Error}/>
                    </Routes>
                </div>
            </BrowserRouter>

    )
}

export default App;