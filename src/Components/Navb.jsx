import React from "react";
const Navb=(props)=>
{
    return <>
    <div className="col-md-2">
        <img className="logo" src={props.logo} alt="Logo"/>
    </div>
    <div className="col-md-6  mt-3">
        <marquee direction="left">
        <h2>{props.headline}</h2>
        </marquee>
    </div>
    <div className="col-md-2 mt-3">
        <div className="row">
            <div className="col-md-4">
            <i class="fa-brands fa-instagram"></i>

            </div>
            <div className="col-md-4">

            </div>
            <div className="col-md-4">

            </div>

        </div>
    </div>
    <div className="col-md-1 mt-3">
        <button type="submit">{props.contact}</button>
    </div>
    </>
}
export default Navb;