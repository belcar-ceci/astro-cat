import React from 'react'
import '../assets/styles/header.css'
import logo from '../assets/image/astrocat.png'
const Header = () => {
  return (
    <header>
      <h1>
        Gatito Astral<img className='astral-cats'src={logo} alt="" />
     </h1>

    </header>
  )
}

export default Header