import './App.css';
import Map from './components/Map';
import VideoAndInfo from './components/VideoAndInfo';
import React, { useState } from 'react'

function App() {
  const [toggle, setToggle] = useState(false);
  const [videoData, setVideoData] = useState([]);

  const handleToggle = () => {
    setToggle(true);
  };

  return (
    <div className="App">
      <Map handleToggle={handleToggle} setVideoData={setVideoData}  />
      {toggle && <VideoAndInfo data={videoData} />}
    </div>
  );
}

export default App;