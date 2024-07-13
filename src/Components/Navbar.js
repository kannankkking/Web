import React from 'react'

import styles from '../Css/Navbar.module.css'
import { IoSearchOutline } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";
const Logo = new URL('../images/logo.png', import.meta.url)
const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.nav}>
            <img src={Logo} />
            <ul>
              <li><a href='#'>Home</a></li>
                <li><a href='#Popular'>Popular</a></li>
                <li><a href='#Blockbuster Movies'>Blockbuster Movies</a></li>
                <li><a href='#'>Only on Movieflix</a></li>
               <li> <a href='#'>Upcomming</a></li>
               <li> <a href='#'>Top pics for you</a></li>
            </ul>
        </div>
        <div className={styles.bar}>
        <div className={styles.dropdown}>
         <IoSearchOutline  className={styles.icons}/> 
          <input type='search'/> 
          </div>
        <a href='/'>  <PiSignOutBold  className={styles.icon}/></a> 
        </div>
    </div>
  )
}

export default Navbar;
