import './editBlock.css';
import {NavLink} from "react-router-dom";
import ListItem from "../../emp-list/listItem/listItem";

const FIO = "FIO"
const POSITION = "POSITION"
const SEX = "SEX"
const DATE = "DATE"
const FIRED = "FIRED"


let EditBlock = (props) => {
    let elPosition = props.positions.map((p) => {
        if (props.employeeEdit.position === p) {
            return (
                <option value={p} selected> {p} </option>
            )}
        else {
            return (
                <option value={p}>{p}</option>
            )}

    });
    let changeInput = (event) => {
        console.log(event.target.value, event.target.name);
        props.updateInputEdit(event.target.value, event.target.name);
    }
    return (
        <div className="editBlock">
            <div className="headerBlock"><p>Редактирование карточки сотрудника</p></div>
            <div>ФИО: <input name={FIO} onChange={changeInput} value={props.employeeEdit.name}/></div>
            <div>
                Должность: <select name={POSITION} onChange={changeInput} value={props.employeeEdit.position} >
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
            <div>Дата рождения: <input name={DATE} onChange={changeInput} type="date" value={props.employeeEdit.date}/></div>
            <div>Уволен: <input type="checkbox" name={FIRED} onChange={changeInput} checked={props.employeeEdit.fired}/></div>




            <div>
                <NavLink to="/">
                    <button onClick={props.saveEditEpm}>Сохранить</button>
                </NavLink>
                <NavLink to="/">
                    <button>Закрыть</button>
                </NavLink>
            </div>
        </div>
    );
}

export default EditBlock;


