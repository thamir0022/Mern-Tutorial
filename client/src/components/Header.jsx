import React from 'react'

const Header = () => {
  return (
    <div className='h-15 w-screen flex px-8 py-4 justify-between items-center border-b border-gray-400'>
          <img className='h-10' src="https://en.wikichip.org/w/images/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png" alt="logo" />
          <div className="w-1/3 flex justify-evenly font-semibold  text-xl">
            <p>Home</p>
            <p>My Orders</p>
            <p>Cart</p>
          </div>
          <button className='h-10 py-2 px-4 font-semibold rounded-md shadow-md bg-blue-500 text-white'>Sign In</button>
    </div>
  )
}

export default Header