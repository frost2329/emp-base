const SELECT = "SELECT";
const UPDATE_INPUT = "UPDATE_INPUT";
const FIO = "FIO"
const POSITION = "POSITION"
const SEX = "SEX"
const DATE = "DATE"
const FIRED = "FIRED"
const SAVE_EDIT = "SAVE_EDIT"
const SAVE_ADD = "SAVE_ADD"
const REMOVE = "REMOVE"

export let updateTextInputAC = (text, name, act) => {
    return {
        type: UPDATE_INPUT,
        act: act,
        text: text,
        name: name
    }
}
export let selectAC = (employee) => {
    return {
        type: SELECT,
        employee: employee
    }
}
export let saveEditEmpAC = () => {
    return {
        type: SAVE_EDIT
    }
}
export let addNewEmpAC = () => {
    return {
        type: SAVE_ADD
    }
}
export let removeEmpAC = () => {
    return {
        type: REMOVE
    }
}

let installState = {
    employees: [
        {
            id: 1,
            name: "Андреев Дмитрий Генадьевич",
            position: "Директор",
            sex: "мужской",
            date: "1999-10-22",
            fired: false
        },
        {
            id: 2,
            name: "Захаров Константин Алексеевич",
            position: "Заместитель Директора",
            sex: "мужской",
            date: "1996-01-23",
            fired: false
        },
        {
            id: 3,
            name: "Куприн Василий Фатеевич",
            position: "Администратор",
            sex: "мужской",
            date: "1999-01-01",
            fired: false
        },
        {
            id: 4,
            name: "Рябова Марина Павловна",
            position: "Специалист по найму",
            sex: "женский",
            date: "1999-01-01",
            fired: false
        },
        {
            id: 5,
            name: "Цветкова Яна Владимировна",
            position: "Специалист по найму",
            sex: "женский",
            date: "1999-01-01",
            fired: false
        },
        {
            id: 6,
            name: "Капустин Олег Николаевич",
            position: "Дизайнер",
            sex: "мужской",
            date: "1999-01-01",
            fired: false
        },
        {
            id: 7,
            name: "Зайцев Алексей Дмитриевич",
            position: "Менеджер по продажам",
            sex: "мужской",
            date: "1999-01-01",
            fired: false
        },
        {
            id: 8,
            name: "Лутченко Федор Васильевич",
            position: "Бухгалтер",
            sex: "мужской",
            date: "1999-01-01",
            fired: false
        },
        {
            id: 9,
            name: "Климова Елизавета Викторовна",
            position: "Агент по рекламе",
            sex: "женский",
            date: "1999-01-01",
            fired: false
        },
        {
            id: 10,
            name: "Мурзина Ольга Денисовна",
            position: "Специалист технической поддержки",
            sex: "женский",
            date: "1999-01-01",
            fired: false
        },
        {
            id: 11,
            name: "Нефедов Виталий Павлович",
            position: "Специалист технической поддержки",
            sex: "мужской",
            date: "1999-01-01",
            fired: false
        },
        {
            id: 12,
            name: "Василенко Екатерина Леонидовна",
            position: "Специалист технической поддержки",
            sex: "женский",
            date: "1999-01-01",
            fired: false
        }
    ],
    activeEmployeeId: 1,
    employeeActive: {
        id: 1,
        name: "Андреев Дмитрий Генадьевич",
        position: "Директор",
        sex: "мужской",
        date: "1999-10-22",
        fired: false
    },
    employeeEdit: {
        id: 1,
        name: "Андреев Дмитрий Генадьевич",
        position: "Директор",
        sex: "мужской",
        date: "18.09.1990",
        fired: false
    },
    employeeAddNew: {id: null, name: null, position: null, sex: null, date: null, fired: null},
    positions: ["Директор", "Заместитель Директора", "Администратор", "Специалист по найму", "Менеджер по продажам", "Бухгалтер", "Агент по рекламе", "Специалист технической поддержки"]
}

const reducer = (state = installState, action) => {
    switch (action.type) {
        case SELECT:
            return {
                ...state,
                activeEmployeeId: action.employee.id,
                employeeActive: {...action.employee},
                employeeEdit: {...action.employee}
            }
        case UPDATE_INPUT:
            if (action.act === "EDIT") {
                switch (action.name) {
                    case FIO:
                        return {
                            ...state,
                            employeeEdit: {...state.employeeEdit, name: action.text}
                        }
                    case POSITION:
                        return {
                            ...state,
                            employeeEdit: {...state.employeeEdit, position: action.text}
                        }
                    case SEX:
                        return {
                            ...state,
                            employeeEdit: {...state.employeeEdit, sex: action.text}
                        }
                    case DATE:
                        return {
                            ...state,
                            employeeEdit: {...state.employeeEdit, date: action.text}
                        }
                    case FIRED:
                        return {
                            ...state,
                            employeeEdit: {...state.employeeEdit, fired: action.text}
                        }
                    default:
                        return state;
                }
            } else if (action.act === "ADD") {
                switch (action.name) {
                    case FIO:
                        return {
                            ...state,
                            employeeAddNew: {...state.employeeAddNew, name: action.text}
                        }
                    case POSITION:
                        return {
                            ...state,
                            employeeAddNew: {...state.employeeAddNew, position: action.text}
                        }
                    case SEX:
                        return {
                            ...state,
                            employeeAddNew: {...state.employeeAddNew, sex: action.text}
                        }
                    case DATE:
                        return {
                            ...state,
                            employeeAddNew: {...state.employeeAddNew, date: action.text}
                        }
                    case FIRED:
                        return {
                            ...state,
                            employeeAddNew: {...state.employeeAddNew, fired: action.text}
                        }
                    default:
                        return state;
                }
            }
        case SAVE_EDIT:
            let stateCopy = {
                ...state,
                employees: [...state.employees],
                employeeActive: {...state.employeeActive}
            }
            for (let i = 0; i < state.employees.length; i++) {
                if (stateCopy.employees[i].id === state.employeeEdit.id) {
                    stateCopy.employees[i] = state.employeeEdit;
                    stateCopy.employeeActive = state.employeeEdit;
                    stateCopy.activeEmployeeId = state.employeeEdit.id;
                }
            }
            return stateCopy;
        case SAVE_ADD:
            if (state.employeeAddNew.name !== null && state.employeeAddNew.position !== null) {
                let newEmpID = state.employees.length + 1;
                for (let i = 0; i < state.employees.length; i++) {
                    if (newEmpID <= state.employees[i].id) {
                        newEmpID = state.employees[i].id + 1;
                    }
                }
                let stateCop = {
                    ...state,
                    employees: [...state.employees, {...state.employeeAddNew, id: newEmpID}],
                    employeeActive: {...state.employeeAddNew},
                    activeEmployeeId: newEmpID,
                    employeeAddNew: {id: null, name: null, position: null, sex: null, date: null, fired: null}
                }
                return stateCop;
            }
            else {
                alert("Заполните обязательные поля для сохранения сотрудника")
                return state;
            }
        case REMOVE:
            let copyState = {
                ...state,
                employees: [...state.employees]
            }
            const index = copyState.employees.findIndex(n => n.id === state.employeeActive.id);
            if (index !== -1) {
                copyState.employees.splice(index, 1);
            }
            return copyState;


        default:
            return state;
    }

}

export default reducer;
