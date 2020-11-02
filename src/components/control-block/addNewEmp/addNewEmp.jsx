import './addNewEmp.css';
import {NavLink} from "react-router-dom";

const FIO = "FIO"
const POSITION = "POSITION"
const SEX = "SEX"
const DATE = "DATE"
const FIRED = "FIRED"

const AddNewEmpBlock = (props) => {
    let elPosition = props.positions.map((p) => {
        return (
            <option value={p}>{p}</option>
        )
    });
    let changeInput = (event) => {
        props.updateInputAdd(event.target.value, event.target.name);
    }
    return (
        <div className="addBlock">
            <div className="headerBlock"><p>Новый сотрудник</p></div>
            <div>ФИО: <input required name={FIO} onChange={changeInput} value={props.employeeAddNew.name}/></div>
            <div>
                Должность:
                <select name={POSITION} onChange={changeInput} value={props.employeeAddNew.position} >
                    {elPosition}
                </select>
            </div>
            <form>
                <div>
                    <input type="radio"  name={SEX} value="мужской" onChange={changeInput} />
                    <label>Мужской</label>
                    <input type="radio" name={SEX} value="женский" onChange={changeInput} />
                    <label>Женский</label>
                </div>
            </form>
            <div>Дата рождения: <input name={DATE} onChange={changeInput} type="date" value={props.employeeAddNew.date}/></div>
            <div>Уволен: <input type="checkbox" name={FIRED} onChange={changeInput} checked={props.employeeAddNew.fired}/></div>
            <div>
                <NavLink to="/"><button onClick={props.addNewEmp}>Добавить</button></NavLink>
                <NavLink to="/"><button>Закрыть</button></NavLink>

            </div>
        </div>
    );
}

export default AddNewEmpBlock;


