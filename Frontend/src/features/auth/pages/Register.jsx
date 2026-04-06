import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router';
import { useAuth } from '../hooks/useAuth';

const Register = () => {

    const { loading, handleRegister } = useAuth();

    const navigate = useNavigate();

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleRegister({ username, email, password })
        navigate('/');
    }

    if(loading){
        return (<main><h1>Loading........</h1></main>)
    }

  return (
    <main>
        <div className="form-container">
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="Username">Username</label>
                    <input 
                    onChange={(e) => {setUsername(e.target.value)}}
                    type="text" placeholder='Enter Username' id='usernmae' name='username' />
                </div>

                <div className="input-group">
                    <label htmlFor="Email">Email</label>
                    <input 
                    onChange={(e) => {setEmail(e.target.value)}}
                    type="text" placeholder='Enter Email Address' id='email' name='email' />
                </div>

                <div className="input-group">
                    <label htmlFor="Password">Password</label>
                    <input 
                    onChange={(e) => {setPassword(e.target.value)}}
                    type="text" placeholder='Enter Password' id='password' name='password' />
                </div>

                <button className='button primary-button'>Register</button>
            </form>

            <p>already have an account ? <Link to={"/login"}>Login</Link></p>
        </div>
    </main>
  )
}

export default Register