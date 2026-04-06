import React from 'react'
import "../auth.form.scss"
import { useNavigate,Link } from 'react-router'

const Login = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
    }


  return (
    <main>
        <div className="form-container">
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="Email">Email</label>
                    <input type="text" placeholder='Enter Email Address' id='email' name='email' />
                </div>

                <div className="input-group">
                    <label htmlFor="Password">Password</label>
                    <input type="text" placeholder='Enter Password' id='password' name='password' />
                </div>

                <button className='button primary-button'>Login</button>
            </form>

            <p>Don't have an account ? <Link to={"/register"}>Register</Link></p>
        </div>
    </main>
  )
}

export default Login