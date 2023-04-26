import {Link, Route, Routes} from "react-router-dom";

import './App.css';
import HomePage from "./components/Home/HomePage";
import {PostsPage} from "./components/Posts/PostsPage";
import {CommentsPage} from "./components/Comments/CommentsPage";
import AnimalsPage from "./components/Animals/AnimalsPage";


function App() {
    return (
        <div className="App">
            <div>
                <ul className={"Menu"}>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/Posts'}>Posts</Link>
                    </li>
                    <li>
                        <Link to={'/Comments'}>Comments</Link>
                    </li>
                    <li>
                        <Link to={'/Animals'}>Animals</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/Posts'} element={<PostsPage/>}/>
                    <Route path={'/Comments'} element={<CommentsPage/>}/>
                    <Route path={'/Animals'} element={<AnimalsPage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
