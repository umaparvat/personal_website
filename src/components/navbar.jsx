import React from "react";
import NavTab from "./navtab";

function NavBar(props) {
    return(
        <div>
            <NavTab to="/about" label="About"/>
            <NavTab to="/resume" label="Resume"/>
            <NavTab to="/projects" label="project"/>
            <NavTab to="/contact" label="Contact"/>
        </div>
    )
}

export default NavBar;
