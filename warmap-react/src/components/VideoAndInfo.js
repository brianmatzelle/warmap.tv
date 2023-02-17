import React, { useState, useEffect, forwardRef } from "react";
import Info from "./video-components/Info";
import "./VideoAndInfo.css";

function VideoAndInfo({ data, executeScroll }, ref) {
    // width = dimensions.width, height = dimensions.height
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    });
    
    useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize)
    });

    useEffect(() => {
        executeScroll();
    }, []);

    
    return (
    <div ref={ref} className="container">
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
        <Info width={dimensions.width} height={data.height} />
    </div>
    );
}

export default forwardRef(VideoAndInfo);