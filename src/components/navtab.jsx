import React from "react";
import { NavLink } from "react-router-dom";

function selectSytle(props) {
    var activeStyle = {
        color: 'green',
        fontWeight: 'bold',
        margin: "10px"
    }

    var navStyle = {
        margin: "10px",
    }
    return(
        props.isActive? activeStyle: navStyle
    )
}

function NavTab(props) {


    return (
        <NavLink style={selectSytle} to={props.to}>
            {props.label}
        </NavLink>
    )
}

export default NavTab;