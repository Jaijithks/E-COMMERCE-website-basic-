import React from "react";
import {useState} from "react";
import {useForm} from "react-hook-form";
import '../css/Auth.css';
import { Link } from "react-router-dom";


function Auth(){

 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const {register, handleSubmit, formState: {errors}} = useForm();

 
    return(
        <>
        <div className="page">
    <div className="auth">
    <form>
        <p>
            <br/>
            <br/>
        </p>
        <h1 className="heading">LOGIN!!</h1>
        <label className="label1">Email</label><br /><input type="text" placeholder="you@gamil.com" onChange={(e) =>
            {
                setEmail(e.target.value)
                console.log(`${email}`)
            }
        }></input><br />
         <label className="label1">Password</label><br /><input type="password" placeholder="*************" onChange={(e) =>
            {
                setEmail(e.target.value)
                console.log(`${email}`)
            }
        }></input><br/>
        <button type="submit">login</button> <Link to='/signup'>Sign Up</Link>
    </form>
    </div>
    </div>
    </>
    )
}

export default Auth;