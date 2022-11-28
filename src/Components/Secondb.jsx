import React from "react";
import Side from "./Side";
import Top from "./Top";

const Secondb=()=>
{
    return <>
    <div className="container mt-2">
        <div className="row">
            <div className="col-md-9">
                <div className="row bg-danger">
                <Top title="Sports"/>
                </div>
                <div className="row bg-warning mt-2">
                <Top title="Crime"/>

                </div>
            </div>
            <div className="col-md-3">
           <Side ad="advertisement"/>
           <Side a2="Weather"/>
           <Side a3="Top News"/>
            </div>
        </div>
        
    </div>
    
    
    </>
}
export default Secondb