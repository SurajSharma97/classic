import React from 'react'
import "../styles/header.scss"
import {HashLink} from "react-router-hash-link"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
   <nav>
    <h1>
        MyBlog
    </h1>
    <main>
        <HashLink to="/#home">Home</HashLink>
        <HashLink to="/contact">Contact</HashLink>
        <HashLink to="/#about">About</HashLink>
        <HashLink to="/#brands">Brands</HashLink>
        <Link to="/services">Services</Link>
    </main>
   </nav>
  )
}

export default Header