import { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const userlogin = () => {
    Axios.post('http://localhost:5000/userlogin', {
      email:email,
      password:password,
    }).then(() => {
       console.log('Success');
    })
  }
  

  return (
    <div className="App">
      <header className="App-header">
        
        <label className="loginlabel">Email</label>
        <input className="logininput" 
         type='email' 
         onChange={(e)=> {setEmail(e.target.value)}}
        />
        
        <label className="loginlabel">Password</label>
        <input className="logininput" 
         type='password' 
         onChange={(e)=> {setPassword(e.target.value)}}
        />

        <button className="loginbtn" onClick={userlogin}> Login </button>
      
      </header>
    </div>
  );
}

export default App;
