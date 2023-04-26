import React from 'react';

const Dog = ({dog, index, deleteDog}) => {
    return (
        <div>
            {dog}
            <button onClick={() => deleteDog(index)}>Delete</button>
        </div>
    );
};

export default Dog;