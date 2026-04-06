import React from 'react'
import { useNavigate,Link } from 'react-router';

const Register = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <main>
        <div className="form-container">
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="Username">Username</label>
                    <input type="text" placeholder='Enter Username' id='usernmae' name='username' />
                </div>

                <div className="input-group">
                    <label htmlFor="Email">Email</label>
                    <input type="text" placeholder='Enter Email Address' id='email' name='email' />
                </div>

                <div className="input-group">
                    <label htmlFor="Password">Password</label>
                    <input type="text" placeholder='Enter Password' id='password' name='password' />
                </div>

                <button className='button primary-button'>Register</button>
            </form>

            <p>already have an account ? <Link to={"/login"}>Login</Link></p>
        </div>
    </main>
  )
}

export default Register