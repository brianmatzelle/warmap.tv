import './App.css';
import Map from './components/Map';
import Video from './components/Video';
import React, { useState } from 'react'

function App() {
  const [toggle, setToggle] = useState(false);
  const [videoData, setVideoData] = useState(null);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <Map handleToggle={handleToggle} setVideoData={setVideoData}  />
      {toggle && <Video data={videoData} />}
    </div>
  );
}

export default App;