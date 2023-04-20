import './App.css';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">APP
      <ul>
        <li>
          <Link to={'/'}>Todos<Link/>
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default App;
