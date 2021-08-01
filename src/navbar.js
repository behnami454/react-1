import React from 'react'
import './navbar.css'

const Navbar = () => {
    return(
            <div class="topnav" id="myTopnav">
            <a href="#home" class="active">Home</a>
            <a href="#news">News</a>
            <a href="">Contact</a>
            <a href="#about">About</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
           </a>
        </div>
       
    );
}

export default Navbar;


