import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='w-screen bg-blue-50 h-16 py-10 flex items-center justify-around'>
		<Link to={'/'}><img className='h-10' src="https://en.wikichip.org/w/images/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png" alt="logo" /></Link>
		<div className="hidden w-1/3 md:flex items-center justify-evenly text-lg">
			<Link to={'/'}>Home</Link>
			<Link to={'/about'}>About</Link>
			<Link to={'/contact'}>Contact</Link>
			<Link to={'/cart'}>Cart</Link>
		</div>
		<Link to={'/login'} className='px-10 py-3 rounded-md shadow-md bg-blue-500 text-white  font-semibold'>Sign In</Link>
	</header>
  )
}

export default Header