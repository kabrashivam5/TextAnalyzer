import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

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
    <Navbar title={properties.title} about={properties.about}/>
    <div className="container">
      <TextForm heading={properties.heading}/>
    </div>
    <button className='container btn btn-primary mx-1 my-2' onClick={changemode}>{btnmode}</button>
    <About/>
    </>
  );
}

export default App;
