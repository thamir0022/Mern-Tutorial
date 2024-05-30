import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await fetch('/api/user/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    if(res.ok){
      const data = await res.json();
      console.log(data);
    }
  }
  return (
       <form onSubmit={handleSubmit} className='flex-center flex-col gap-6  py-10 px-5 rounded-md bg-gray-100'>
        <img className='h-10' src="https://en.wikichip.org/w/images/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png" alt="logo" />
        <h1 className='text-center font-semibold text-3xl'>Welcome back!</h1>
        <input name='email' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="px-4 py-2 rounded-md" placeholder='Enter your email' required/>
        <input name='password' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="px-4 py-2 rounded-md" placeholder='Enter your Password' required/>
        <button className='py-2 px-4 rounded-md bg-blue-500' type='submit'>Sign In</button>
        <p>Don't have an account? <span className='link'><Link to={'/sign-up'}>Sign Up</Link></span></p>
        </form> 
  )
}

export default Login