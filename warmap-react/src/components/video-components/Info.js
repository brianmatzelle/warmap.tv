import React from "react";

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
            <h1>CARDS</h1>
            <button>refresh cards</button>
        </div>

    );
}