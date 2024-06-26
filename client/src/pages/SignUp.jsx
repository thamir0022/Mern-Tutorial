import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await fetch('/api/user/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    if(res.ok){
      navigate('/login');
    }
  }

  return (
       <form onSubmit={handleSubmit} className='flex-center flex-col gap-6  py-10 px-5 rounded-md bg-gray-100'>
          <img className='h-10' src="https://en.wikichip.org/w/images/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png" alt="logo" />
        <h1 className='text-center font-semibold text-3xl'>Create Your Account</h1>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} className="px-4 py-2 rounded-md" placeholder='Enter your email' required/>
        <input type="password"  value={password} onChange={e => setPassword(e.target.value)} className="px-4 py-2 rounded-md" placeholder='Enter your Password' required/>
        <button className='py-2 px-4 rounded-md bg-blue-500' type='submit'>Sign Up</button>
        <p>Already have an account? <span className='link'><Link to={'/login'}>Log In</Link></span></p>
        </form> 
  )
}

export default SignUp