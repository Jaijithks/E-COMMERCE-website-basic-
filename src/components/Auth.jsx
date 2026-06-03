import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import '../css/Auth.css';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Auth(){
 
 const { logIn } = useContext(AuthContext);
 const [error, setError] = useState(null);
 const {register, handleSubmit, formState: {errors}} = useForm();
 const navigate = useNavigate();

 function onSubmit(data){
    const res = logIn(data.email, data.password);
    if(!res.success){
      setError(res.error);
      return;
    }
    navigate('/');
 }
 
    return(
        <>
        <div className="page">
    <div className="auth">
    <form onSubmit={handleSubmit(onSubmit)}>
        <p>
            <br/>
            <br/>
        </p>
        <h1 className="heading">LOGIN!!</h1>
        {error && <p style={{color: '#f59e0b'}}>{error}</p>}
        <label className="label1">Email</label><br /><input {...register('email', {required :"email cannot be empty"}) }type="email" placeholder="you@gamil.com"  />
        {errors.email &&(<p className="errors">{errors.email.message}</p>)}
         <label className="label1">Password</label><br /><input {...register("password", {required: "Password is required" , minLength: {value: 6 ,message:"password must be atleast 6 characters"},maxLength:{value:12,message:"password must be atmost 12 characters"}})} type="password" placeholder="*************"  />
        {errors.password && (<p className="errors">{errors.password.message}</p>)}
        <button type="submit">login</button> <p>Dont have an acoount?</p><Link to='/signup'>Sign Up</Link>
    </form>
    </div>
    </div>
    </>
    )
}

export default Auth;