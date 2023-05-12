import React, {useEffect, useState} from 'react';

import Album from "./Album/Album";
import '../Todos/Todos.css'
import {albumService} from "../../services/album.service";

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(()=> {
        albumService.getAll().then(value => value.data).then(value => setAlbums([...value]))
    },[]);
    return (
        <div>Albums Page
            <div className={"FatherBlock"}>
                {albums.map(album => <Album key={album.id} album={album}/>)}
            </div>
        </div>
    );
};

export default Albums;