import React, {useEffect, useState} from 'react';

import {AlbumsServices} from "../../services/getServises";
import Album from "./Album/Album";
import '../Todos/Todos.css'

const AlbumsPage = () => {
    const [album, setAlbum] = useState([]);

    useEffect(()=> {
        AlbumsServices.getData().then(value => value.data).then(data => setAlbum(data))
    },[]);
    return (
        <div>Albums Page
            <div className={"FatherBlock"}>
                {album.map(album => <Album key={album.id} album={album}/>)}
            </div>
        </div>
    );
};

export default AlbumsPage;