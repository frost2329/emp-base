import React from "react";
import {connect} from "react-redux";
import ControlBlock from "./control-block";
import {saveEditEmpAC, addNewEmpAC, updateTextInputAC, removeEmpAC} from "../../redux/reducer";

let mapStateToProps = (state) => {
    return {
        basePage: state.basePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateInputEdit(text, name) {
            dispatch(updateTextInputAC(text, name, "EDIT"));
        },
        updateInputAdd(text, name) {
            dispatch(updateTextInputAC(text, name, "ADD"));
        },
        saveEditEpm(){
            dispatch(saveEditEmpAC());
        },
        addNewEmp(){
            dispatch(addNewEmpAC());
        },
        removeEmp(){
            dispatch(removeEmpAC());
        }
    }


}
const ControlBlockContainer = connect(mapStateToProps, mapDispatchToProps)(ControlBlock);

export default ControlBlockContainer;
