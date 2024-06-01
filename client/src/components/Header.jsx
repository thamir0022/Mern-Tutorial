import React, { useContext, useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { UserContext } from '../context/UserContext';

const Header = () => {
	const { user, setUser } = useContext(UserContext);
	const navigate = useNavigate();

	const handleSignOut = async () => {
		const res = await fetch('/api/user/sign-out', {
			method: 'POST'
		})
		if(res.ok){
			setUser({});
			localStorage.removeItem("user");
			navigate('/');
		}
	}


  return (
    <header className='w-screen bg-blue-50 h-16 py-10 flex items-center justify-evenly'>
		<Link to={'/'}><img className='h-10' src="https://en.wikichip.org/w/images/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png" alt="logo" /></Link>
		<div className="hidden w-1/3 md:flex items-center justify-evenly text-lg">
			<Link to={'/'}>Home</Link>
			<Link to={'/about'}>About</Link>
			<Link to={'/contact'}>Contact</Link>
			<Link to={'/cart'}>Cart</Link>
		</div>
		{user && user.email ? (
			<div className="md:w-[400px] md:flex justify-between items-center">
				<span className='hidden md:block'>Signined as : <span className='font-semibold'>{user.email}</span></span>
				<button onClick={() => handleSignOut()} className='px-10 py-3 rounded-md shadow-md bg-blue-500 text-white  font-semibold'>Sign Out</button>
			</div>
		): (
			<Link to={'/login'} className='px-10 py-3 rounded-md shadow-md bg-blue-500 text-white  font-semibold'>Sign In</Link>
		)}
	</header>
  )
}

export default Header