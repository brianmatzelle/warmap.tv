import React, { useState, useEffect, forwardRef } from "react";
import Info from "./video-components/Info";
import "./VideoContainer.css";
import SplitterLayout from "react-splitter-layout";

function VideoAndInfo({ data, executeScroll }, ref) {
    /*
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
    */

    useEffect(() => {
        executeScroll();
    });

    const [dragging, setDragging] = useState(false);
    const handleDragStart = () => {
        setDragging(true);
    };
    const handleDragEnd = () => {
        setDragging(false);
    };
    
    return (
    <div ref={ref} className="container">
        <SplitterLayout className="splitter" onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <div>
                <iframe 
                    // width={data.width} 
                    width="50%"
                    height={data.height} 
                    src={data.src}
                    title={data.title} 
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullscreen="true"
                    >
                </iframe>
            </div>

            <div>
                {dragging}
                <Info data={data}/>
            </div>
        </SplitterLayout>
    </div>
    );
}

export default forwardRef(VideoAndInfo);