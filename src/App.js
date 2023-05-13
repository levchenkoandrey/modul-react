import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import Animals from "./components/Animals/Animals";
import MainLayout from "./layouts/MainLayout";
import PostPage from "./pages/PostPage";
import CommentPage from "./pages/CommentPage";


function App() {
    return (
                <Routes>
                    <Route path={'/'} element={<MainLayout/>}>
                        <Route index element={<Navigate to={'posts'}/>}/>
                        <Route path={'posts'} element={<PostPage/>}/>
                        <Route path={'comments'} element={<CommentPage/>}/>
                        <Route path={'cats_dogs'} element={<Animals/>}/>
                    </Route>
                </Routes>
    );
}

export default App;
