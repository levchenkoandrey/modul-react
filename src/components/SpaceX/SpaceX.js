import React, {useEffect, useState} from 'react';
import SpaceXItem from "./SpaceXItem/SpaceXItem";

const SpaceX = () => {
    let [rockets, setRockets] = useState([]);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches/")
            .then(value => value.json())
            .then(data => {
                setRockets(data);
            })
    }, [])
    console.log(rockets);
    return (
        <div>
            <div className={"header"}>SpaceX</div>
            <div className={"PostsBlock SpaceX"}>
                {
                    rockets.filter(item => item.launch_year !== "2020").map((value, index) => <SpaceXItem value={value}
                                                                                                          key={index}/>)
                }
            </div>
        </div>
    );
};

export default SpaceX;