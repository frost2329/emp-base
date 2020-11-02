import React from "react";
import './listitem.css';
import {NavLink} from "react-router-dom";

const ListItem = (props) => {
    let clickItem = () => {
        props.clickEmployee(props.employee);
    }

    let classNameLI = "";
    if (props.employee.id === props.activeEmployeeId) {
        classNameLI = "listItem active";
    } else {
        classNameLI = "listItem";
    }

    return (
        <div className={classNameLI} onClick={clickItem}>
            <NavLink className="nav" to="/">{props.employee.name} </ NavLink>
        </div>
    )
}
export default ListItem;