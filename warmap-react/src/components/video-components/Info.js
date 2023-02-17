import React from "react";
import Deck from "./Deck";

export default function Info({ width, height }) {
    return(
        <div 
        style={{ 
            width: width, 
            height: height, 
            backgroundColor: 'red', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: "center" 
        }} 
        className="info"
        >
            <Deck />
        </div>

    );
}