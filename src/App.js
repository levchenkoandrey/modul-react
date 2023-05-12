import './App.css';
import {Link, Route, Routes} from "react-router-dom";

import HomePage from "./components/Home/HomePage";
import TodosPage from "./components/Todos/TodosPage";
import AlbumsPage from "./components/Albums/AlbumsPage";
import CommentsPage from "./components/Comments/CommentsPage";
import Post from "./components/Comments/Post";

function App() {
    return (
        <div className="App">APP
            <div>
                <ul className={"Menu"}>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/Todos'}>Todos</Link>
                    </li>
                    <li>
                        <Link to={'/Albums'}>Albums</Link>
                    </li>
                    <li>
                        <Link to={'/Comments'}>Comments</Link>
                    </li>
                </ul>
            </div>
            <div>
                {/*will do main link*/}
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/Todos'} element={<TodosPage/>}/>
                    <Route path={'/Albums'} element={<AlbumsPage/>}/>
                    <Route path={'/Comments'} element={<CommentsPage/>}>
                        <Route path={':postId'} element={<Post/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
