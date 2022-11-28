import React  from "react";
const Side=(props)=>
{
    return <>
    <div className="container">
        <div className="row">
            <h2>{props.ad}</h2>
        </div>
        <div className="row mt-2">
            <h2>{props.a2}</h2>
        </div>
        <div className="row mt-2">
            <h2>{props.a3}</h2>
        </div>
    </div>
    
    
    
    </>
}
export default Side;