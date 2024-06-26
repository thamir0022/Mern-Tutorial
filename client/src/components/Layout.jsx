import React from 'react'

const Layout = ({children}) => {
  return (
    <div className="min-h-[calc(100vh-4rem)] w-screen">
      {children}
    </div>
  )
}

export default Layout