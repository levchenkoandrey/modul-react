import './App.css';
import Cars from "./components/cars/Cars";
import UserForm from "./components/UserForm/UserForm";

function App() {
    return (
        <div className="App">
            <UserForm/>
            <Cars/>
        </div>
    );
}

export default App;
