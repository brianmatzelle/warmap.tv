import React from "react";
import Deck from "./Deck";

export default function Info({ data, width, height }) {
    return(
        <div 
        style={{ 
            width: "50vw", 
            height: data.height, 
            backgroundColor: 'red', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: "center" 
        }} 
        className="info"
        >
            <iframe title={data.title} src={data.embed} width="100%" height="100%"></iframe>
        </div>

    );
}