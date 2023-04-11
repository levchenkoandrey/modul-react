const Simpson = ({item}) => {
    return (
        <div className="block">
            <img src={item.photo}/>
            <h1>Hi, I'm {item.name} {item.surname}, I'm {item.age} year old </h1>
            <p>{item.info}</p>
        </div>
    );
};

export default Simpson;