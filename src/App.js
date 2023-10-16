import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
// import About from './components/About';
function App() {
  const [mode, setMode]=useState('light')
  const [alert,setAlert]=useState(null)
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert('Dark mode has been enabled!', 'success')
      document.title="Myfirstapp-Dark Mode"
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light mode has been enabled!', 'success')
      document.title="Myfirstapp-Light Mode"
      // setInterval(() => {
      //   document.title="Myfirstapp is amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install Myfirstapp"
      // }, 1500);
    }
  }
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
    {/* <Router> */}
  <Navbar title="ReactApp" about="About" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className='container my-3'>
  
  
    {/* <Routes>
    <Route exact path="about" element={<About />} /> */}
    {/* <Route exact path="/" element={ */}
    <TextForm showAlert={showAlert} heading='Enter text to analyze below' mode={mode}/>
    {/* }/> */}
    {/* </Routes> */}
  

  
  
  {/* <About/> */}
  </div>
  {/* </Router> */}
  </>
  );
}

export default App;
