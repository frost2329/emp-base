import React from "react";
import {selectAC} from "../../redux/reducer";
import {connect} from "react-redux";
import EmpList from "./emp-list";

let mapStateToProps = (state) => {
    return {
        basePage: state.basePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        clickEmployee(employee) {
            dispatch(selectAC(employee))
        }
    }


}
const EmpListContainer = connect(mapStateToProps, mapDispatchToProps)(EmpList);

export default EmpListContainer;
