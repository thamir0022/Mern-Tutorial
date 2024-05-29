import React from 'react'
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
       <form className='flex-center flex-col gap-6  py-10 px-5 rounded-md bg-gray-100'>
        <h1 className='text-center font-semibold text-3xl'>Create Your Account</h1>
        <input type="text" className="px-4 py-2 rounded-md" placeholder='Enter your email' required/>
        <input type="password" className="px-4 py-2 rounded-md" placeholder='Enter your Password' required/>
        <button className='py-2 px-4 rounded-md bg-blue-500' type='submit'>Sign Up</button>
        <p>Already have an account? <span className='link'><Link to={'/login'}>Log In</Link></span></p>
        </form> 
  )
}

export default SignUp