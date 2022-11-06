import { useState } from 'react';
import './App.css';
import Filter from './components/Filter/Filter';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar.js'

function App() {
  const [location,setLocation] = useState('none');
  const [furnish, setfurnish] = useState('none');
  const [rooms, setrooms] = useState('none'); 
  const [baths, setBath] = useState('none');
  return (
    <div className="App">
      <Navbar/>
      <Filter setBath={setBath} setLocation={setLocation} setfurnish={setfurnish} setrooms={setrooms} location={location}/>
      {/* {console.log(location)} */}
      <Main location={location} furnish={furnish} rooms={rooms} baths={baths}/>
    </div>
  );
}

export default App;
