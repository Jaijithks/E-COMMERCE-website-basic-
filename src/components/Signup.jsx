import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import '../css/Auth.css';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Signup() {
    const { signUp } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    async function onSubmit(data) {
        const res = signUp(name || data.name, email || data.email, password || data.password);
        if (!res.success) {
            setError(res.error);
            return;
        }
        navigate('/');
    }

    return (
        <>
            <div className="page">
                <div className="auth">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p>
                            <br />
                            <br />
                        </p>
                        <h1 className="heading">Sign Up!!</h1>
                        {error && <p style={{ color: '#f59e0b' }}>{error}</p>}
                        <label className="label1">Name</label>
                        <br />
                        <input {...register("name", { required: "Name is required" })} type="text" placeholder="yourname" value={name} onChange={(e) => setName(e.target.value)} />
                        <br />
                        {errors.name && (<p>{errors.name.message}</p>)}
                        <label className="label1">Email</label>
                        <br />
                        <input {...register("email", { required: "Email is required" })} type="email" placeholder="you@gamil.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <br />
                        {errors.email && (<p>{errors.email.message}</p>)}
                        <label className="label1">Password</label>
                        <br />
                        <input {...register("password", { required: "password is required", minLength: { value: 6, message: "minimum length must be 6" }, maxLength: { value: 12, message: "maximum length should not greater than 12" } })} type="password" placeholder="*************" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <br />
                        {errors.password && (<p>{errors.password.message}</p>)}
                        <button type="submit">Sign Up</button>
                        <p>Alredy have an account?</p>
                        <Link to="/Auth">Login</Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup;