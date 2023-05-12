import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import MainLayout from "./components/layouts/MainLayout";
import TodosPage from "./pages/TodoPage/TodosPage";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";
import Post from "./components/Post/Post";


function App() {
    return (
        <div className="App">APP
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'todos'}/>}/>
                    <Route path={'todos'} element={<TodosPage/>}/>
                    <Route path={'albums'} element={<AlbumsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={':postId'} element={<Post/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
