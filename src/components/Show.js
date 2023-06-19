import React from "react";

function Show(props){
    return(
        <div className="ShowCard">
            <img src={props.showObj.img}/>
            <h1>{props.showObj.name}</h1>
            <p>{props.showObj.story === "" ? null : props.showObj.story}</p>
        </div>
    )
}

export default Show;