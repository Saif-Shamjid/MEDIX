import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {setIsLoading,setUser,signInWithGoogle,user,error,processLogin,setError,logOut} = useAuth();


    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();


        if(!email){
            setError("You must input your Email");
            return;
        }

        if(!password){
            setError("You must input your Password");
            return;
        }

        processLogin(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
            setError('')
          })
          .catch(error => {
            setError(`${error}`)
          })
    }

    const handleSignIn = () => {
        signInWithGoogle()
        .then(res=>{
            setUser(res.user);
            console.log(res.user);
        })
        .finally(()=> setIsLoading(false))
    }


    const handleChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    return (
        <div className='container'>
            <h2>{user.displayName}</h2>

            <form onSubmit={handleLogin}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input onBlur={handleChange} type="email" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" />
                    </div>
                </div>
                
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>

            <button onClick={handleSignIn}>Google</button>
            <button onClick={logOut}>Logout</button>
        </div>
    );
};

export default Login;