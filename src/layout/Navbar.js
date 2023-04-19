import React from 'react'
import { Link } from 'react-router-dom'
import Marque from '../pages/Marque'
// import '../../styles/Navbar.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsCart4 } from 'react-icons/bs'
import { useState } from 'react';
import '../styles/Navbar.css'

const Navbar = ({ cartItem }) => {
  return (
    <div className='sticky-top'>
      <Marque />
      <div className=' navbar'>
        <header className='d-flex justify-content-between align-items-center container'>
          <div>
            <Link to='/' className='text-decoration-none '>
              <h1 className='fst-italic text-light'>Eggys</h1>
            </Link>
          </div>

          <nav className='d-flex justify-content-between align-items-center'>
            <div>
              <Link to='/Cart' className='text-decoration-none text-light fs-3 '>
                <BsCart4  />
                Cart ({cartItem.length})
              </Link>
            </div>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default Navbar
