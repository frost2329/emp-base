import './control-block.css';
import InfoBlock from "./infoblock/infoblock";
import EditBlock from "./editBlock/editBlock";
import {NavLink, Route} from "react-router-dom";
import AddNewEmpBlock from "./addNewEmp/addNewEmp";

const ControlBlock = (props) => {
    let removeEmp= () =>{
        props.removeEmp();
    }
    return (
        <div className="uprBlock">
            <InfoBlock employeeActive={props.basePage.employeeActive}/>
            <div className="controlButtons">
                <NavLink to="/edit"><button>Редактировать</button></NavLink>
                <button onClick={removeEmp}>Удалить</button>
                <NavLink to="/add"><button>Добавить</button></NavLink>
            </div>
            <Route path='/edit' render={ () => <EditBlock employeeEdit={props.basePage.employeeEdit}
                                                          positions={props.basePage.positions}
                                                          updateInputEdit={props.updateInputEdit}
                                                          saveEditEpm={props.saveEditEpm} />} />
            <Route path='/add' render={ () => <AddNewEmpBlock employeeAddNew={props.basePage.employeeAddNew}
                                                              positions={props.basePage.positions}
                                                              updateInputAdd={props.updateInputAdd}
                                                              addNewEmp={props.addNewEmp} />} />

        </div>
    );
}

export default ControlBlock;
