import React from 'react'

const Navbar = () => {
  return (
  
        <nav className="container nav">

            <div>
                <img src="/images/brand_logo.png" alt="logo" />
            </div>

            <ul>
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button>login</button>
        </nav>
   
  )
}

export default Navbar
