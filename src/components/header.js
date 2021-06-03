import React from 'react'
import { Link } from "gatsby"
import * as headerStyles from './header.module.scss'
import logo from '../images/Logo_CROP.jpg'

const Header = () => {
    return(
      <header className={headerStyles.header} >
        <div className={headerStyles.logo}>
            <Link to="/">
              <img className={headerStyles.logoImage} src={logo} alt="siskiyou-logo" />
            </Link>
        </div>
          <nav>
              <ul className={headerStyles.navList}>
               <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">HOME</Link></li>
               <li><Link className={headerStyles.navItem} to="/">SERVICES</Link></li>
               <li><Link className={headerStyles.navItem} to="/">CONTACT US</Link></li> 
              </ul>
          </nav>
      </header>
    )
}


export default Header;