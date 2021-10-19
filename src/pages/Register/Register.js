import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const {setUser,setUserName,setError,error,createNewUser} = useAuth()

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleRegister = e => {
        e.preventDefault();
    
        console.log(email, password);
    
        if (password.length < 6) {
          setError("Password Must be at least 6 char long");
          return;
        }
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
          setError("Password Must include 2 uper case");
          return;
        }
        if(!name){
            setError("You must input your Name");
            return;
        }
    
        
        
        //firebase register
        createNewUser(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setUser(user);
            console.log(user);
            // ...
            setError('')
            setUserName({displayName: `${name}`})
            .then(() => {
                // Profile updated!
                // ...
                console.log("Profile updated!");
              }).catch((error) => {
                // An error occurred
                // ...
                setError(`${error}`)
              });
        })
        .catch(error => {
            setError(`${error}`)
        })
        
    }

    
    

    const handleNameChange = e => {
        setName(e.target.value)
    }
    const handleChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }



    return (
        <div className='container'>
            <h2>Register hdre</h2>
            <form onSubmit={handleRegister}>
                <div className="row mb-3">
                    <label htmlFor="inputName3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                    <input onBlur={handleNameChange} type="text" className="form-control" id="inputName3" />
                    </div>
                </div>
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
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
};

export default Register;