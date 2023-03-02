import React,{ useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {Route,Routes} from 'react-router-dom';

function App() {
  const [mode,setMode]=useState('light')
  const [mybtn,setmybtn]=useState("Enable Light mode")
  const [alert,setalert]=useState(null)

  const showAlert=(message,type)=>{
        setalert({
          msg:message,
          type:type
        })
        setTimeout(()=>{
          setalert(null)
      }, 3000);
      
  }
  const toggleMode=()=>{
    if(mode==='dark'){
       setMode('light');
       document.body.style.backgroundColor='white'
       setmybtn("Enable Dark mode")
       showAlert("Light mode has been enabled","success")
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#112438'
      setmybtn("Enable Light mode")
      showAlert("Dark mode has been enabled","success")
    }
}
  return (
   <>
{/* <Navbar title="TextUtils" aboutText="About Us"/> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} mybtn={mybtn}/>
<Alert alert={alert}/>
<div className="container  my-3" >
  <Routes>
          <Route exact path="/" element={<Textform heading="Enter the text to analyse" mode={mode} showAlert={showAlert}/>} />
      <Route exact path="/about" element={<About mode={mode}/>} />
      </Routes>
{/* <Textform heading="Enter the text to analyse" mode={mode} showAlert={showAlert}/> */}
{/* <About/> */}
</div>
</>
  );
}

export default App;
