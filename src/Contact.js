import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
const Contact = ()=>{
    return (
        <>
        <div className="my-5">
            <h1 className="text-center">CHROME-LAB-MANAGEMENT</h1>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mx-auto">
                    <div className="row gy-4">
                       {
                           Sdata.map((val,ind)=>{
                               return <Card 
                                key ={ind}
                                imgsrc={val.imgsrc}
                                title = {val.title}
                               />
                           })
                       }
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Contact;