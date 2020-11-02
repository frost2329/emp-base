import React from "react";
import ListItem from "./listItem/listItem";
import './emp-list.css';


const EmpList = (props) => {

    let clickEmployee = (employee) => {
        props.clickEmployee(employee);
    }
    let employees = props.basePage.employees;
    let elMessages = employees.map(e => (<ListItem employee={e} clickEmployee={clickEmployee} activeEmployeeId={props.basePage.activeEmployeeId}  />));


    return (
        <div className="listBlock" >
            <div className="headerBlock"><p>Список сотрудников</p></div>
            <div className="list">
                {elMessages}
            </div>

        </div>
    );
}

export default EmpList;


