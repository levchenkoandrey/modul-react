import React, {useState} from 'react';

import {PageEnum} from "./constants/page.enum";
import {UserPage} from "./Pages/UserPage";
import {CommentPage} from "./Pages/CommentPage";
import {CarPage} from "./Pages/CarPage";
import {Header} from "./components/Header/Header";

const App = () => {

    const [choice, setChoice] = useState<PageEnum>(PageEnum.USERS);
    return (
        <div>
            <Header setChoice={setChoice}/>
            {choice === PageEnum.USERS && <UserPage/>}
            {choice === PageEnum.COMMENTS && <CommentPage/>}
            {choice === PageEnum.CARS && <CarPage/>}
        </div>
    );
};

export default App;
