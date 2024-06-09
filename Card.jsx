import { useState } from "react";

function Card({id, name, info, image, price, removeTour}){

    const [readmore, setReadmore] = useState(false);
    let description = readmore ? info : `${info.substring(0, 200)}...`;

    function readHandler(){
        setReadmore(!readmore);
    }

    return (
        <div className="card">
            <img src={image} alt="" />
            <div className="info">
                <div className="price">₹ {price}</div>
                <div className="city">{name}</div>
            </div>
            <div className="desc">
                {description}
                <span onClick={readHandler} className="anchor">
                    {readmore ? ' Show Less' : ' Read More'}
                </span>
            </div>
            <button className="btn-red" onClick = {() => {removeTour(id)}}>Not Interested</button>
        </div>
    )
}

export default Card;