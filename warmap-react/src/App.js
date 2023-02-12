import './App.css';
import Map from './components/Map';
import Video from './components/Video';
import React from 'react'

function App() {
  const [toggle, setToggle] = React.useState(false)

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <Map handleToggle={handleToggle} />
      {toggle && <Video />}
    </div>
  );
}

export default App;