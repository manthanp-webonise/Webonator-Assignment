import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch,} from 'react-redux';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import { useHistory } from 'react-router-dom';
import './App.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [emailErr, setEmailErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [success, setSuccess] = useState ({});

    const dispatch = useDispatch();
    let history = useHistory();
  
    const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
  }

    const formValidation= ()=> {
        const emailErr = {};
        const passwordErr = {};
        const success = {};
        let isValid = true;

        if(!email.trim() || email!=='abc@gmail.com' ){
            emailErr.shortemail= "Invalid Email";
            isValid=false;
        }
          
        if(password==='' || password!=='12345678'){
            passwordErr.wrongpassword = "Invalid Password";
            isValid=false;
        } 

        if(isValid===true){
            success.msg = "LOGIN SUCCESSFULL";
            history.push("/Dashboard");
        }

        setEmailErr(emailErr);
        setPasswordErr(passwordErr);
        setSuccess(success);
        return isValid;
    }
    return (
        <div>
            <form onSubmit={onSubmit} className="login_form">
            
             <label className="label"> Email</label>
                <input className="input" 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
                {Object.keys(emailErr).map((key) => {
                  return <div className="email_error"> {emailErr[key]} </div>})}

            <label className="label"> Password </label>
                <input className="input" 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                />
                {Object.keys(passwordErr).map((key) => {
                  return <div className="password_error"> {passwordErr[key]} </div>})}

            <button  
            className="login_btn" type="submit"> 
                    Login
                </button>
                {Object.keys(success).map((key) => {
                  return <div className="success_msg"> {success[key]} </div>})}
            </form>
        </div>
    
    )
}

export default Login
