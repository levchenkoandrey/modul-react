import './App.css';
import Posts from "./components/Posts/Posts";
import './components/Posts/Posts.css'
import './components/Posts/Post/Post.css'
import SpaceX from "./components/SpaceX/SpaceX";

function App() {
    return (
        <div className="App">
            <Posts/>
            <SpaceX/>

        </div>
    );
}

export default App;
