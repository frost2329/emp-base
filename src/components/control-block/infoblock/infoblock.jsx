import './infoblock.css';
const InfoBlock = (props) => {
    return (
        <div className="infoBlock">
            <div><p>Карточка сотрудника</p></div>
            <span>ФИО: {props.employeeActive.name}</span><br/>
            <span>Должность: {props.employeeActive.position}</span><br/>
            <span>Пол: {props.employeeActive.sex}</span><br/>
            <span>Дата рождения: {props.employeeActive.date}</span><br/>
            <span>Уволен: {(props.employeeActive.fired) ? "да" : "нет"}</span>
        </div>
    );
}

export default InfoBlock;
