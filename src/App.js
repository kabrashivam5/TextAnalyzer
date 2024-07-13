import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

function App() {
  let properties={
    title:"Navbar",
    about:"About",
    heading:"Enter Text to Analyze"
  }
  const[mode,setMode]=useState('false');
  const[btnmode,setbtnMode]=useState('Enable Dark Mode');
  let changemode=()=>{
    if (mode==='true'){
      document.body.style.backgroundColor='black'
      setbtnMode('Enable Light Mode')
      setMode('false')
    }
    else { 
      document.body.style.backgroundColor='white'
      setbtnMode('Enable Dark Mode')
      setMode('true')
    }
  }

  return (
    <>
      <Router>
            <Routes>
                <Route path="/about" element={
                  <>
                    <Navbar title={properties.title} about={properties.about}/>
                    <About />
                  </>
                } />
                <Route path="/home" element={
                  <>
                    <Navbar title={properties.title} about={properties.about}/> 
                    <div className="container">
                    <TextForm heading={properties.heading}/>
                    </div>
                  </> 
                  
                  }
                />
                <Route path="/" element={
                  <>
                    <Navbar title={properties.title} about={properties.about}/> 
                    <div className="container">
                    <button className='container btn btn-primary mx-1 my-2' onClick={changemode}>{btnmode}</button>
                    </div>
                    
                  </> 
                  
                  }
                />
            </Routes>
        </Router>
    </>
  );
}

export default App;
