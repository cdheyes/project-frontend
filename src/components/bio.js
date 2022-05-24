import React from "react";
import { MdPlace } from "react-icons/md";
import "../style/contact.css"

export const Bio = ({
    icon= <MdPlace></MdPlace>,
    text= "this is an info",
}) => {
    return (
        <div>
            <div className="locContainer">
        <div className="icon">{icon}</div>
        <div className="text">{text}</div>
        </div>    
        </div>

    );
};