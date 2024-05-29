import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex justify-between h-16 mx-auto">
		<Link to={'/'} rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
    <img className='h-10' src="https://en.wikichip.org/w/images/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png" alt="logo" />
		</Link>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<Link to={'/'} rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Home</Link>
			</li>
			<li className="flex">
				<Link to={'/orders'}  rel="noopener noreferrer"  className="flex items-center px-4 -mb-1 border-b-2 dark:border-">My Orders</Link>
			</li>
			<li className="flex">
				<Link to={'/cart'} rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Cart</Link>
			</li>
		</ul>
		<div className="items-center flex-shrink-0 hidden lg:flex">
			<button className="self-center px-8 py-3 rounded bg-blue-400 shadow-md">Sign In</button>
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
  )
}

export default Header