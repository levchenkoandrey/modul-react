import React from 'react';

const SpaceXItem = ({value}) => {
    const {mission_name, launch_year, links} = {...value}
    return (
        <div className={"PostBlock"}>
            {
                <div>
                    <span>{mission_name}</span>
                    <h2>{launch_year}</h2>
                    <a href={links.mission_patch_small
                    } target="_blank">Mission_patch_small</a>
                </div>
            }
        </div>
    );
};

export default SpaceXItem;