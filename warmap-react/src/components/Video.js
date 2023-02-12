import React from "react";

export function createVideo() {
    console.log("Video created");
}

export default function Video({ data }) {
    return (
        <iframe 
            width={data.width} 
            height={data.height} 
            src={data.src} 
            title={data.title} 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
            >
        </iframe>
    );
}