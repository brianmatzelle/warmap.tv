import './App.css';
import Map from './components/Map';
import VideoContainer from './components/VideoContainer';
import React, { useState, useRef } from 'react'

function App() {
  const [toggle, setToggle] = useState(false);
  const [videoData, setVideoData] = useState([]);
  const [mapHeight, setMapHeight] = useState("100vh");

  const handleToggle = () => {
    setToggle(true);
    setMapHeight("80vh");
  };

  const ref = useRef(null)

  const executeScroll = () => {
      ref.current?.scrollIntoView({ behavior: "smooth" })
  }; 

  return (
    <div className="App">
      <Map height={mapHeight} handleToggle={handleToggle} setVideoData={setVideoData} />
      {toggle && <VideoContainer ref={ref} data={videoData} executeScroll={executeScroll} />}
    </div>
  );
}

export default App;