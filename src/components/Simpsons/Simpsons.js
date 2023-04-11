import Simpson from "./Simpson/Simpson";

const Simpsons = ({array}) => {
    return (
        <div className="Simpsons">
            <span>Simpsons family</span>
            <div className="SimpsonsBlock">
                {
                    array.map((value, index) =>
                        (<Simpson item={value} key={index}/>))

                }
            </div>
            <hr/>
        </div>
    );
};

export default Simpsons;