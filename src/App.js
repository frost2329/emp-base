import './App.css';
import EmpListContainer from "./components/emp-list/emp-list-container";
import ControlBlockContainer from "./components/control-block/controlBlockContainer";

const App = () => {
    return (
        <div className="App">
            <EmpListContainer />
            <ControlBlockContainer />
        </div>
    );
}

export default App;
