import React from 'react'
import '../Header/Header.css'
import Logo from '../../assets/logo.png'
export const Header = () => {
  return (
    <div className="header">
        <img src={Logo} alt="" className='logo'/>

        <ul className='header-menu'>
            <li>Inicio</li>
            <li>Programas</li>
            <li>¿Porque usar?</li>
            <li>Planes</li>
            <li>Testimonios</li>
        </ul>

    </div>
  )
}

export default Header
