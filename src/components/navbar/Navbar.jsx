//react
import { useState } from 'react'

//styles
import './navbar.css'

//assets
import logo from '../../assets/logo.png'
import ham from '../../assets/ham.png'

//router
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [show, setShow] = useState(false)

  return (
    <nav className='navbar'>
        {/* <div className="logo-container"> */}
            {/* <img src={logo} alt="" className="logo" /> */}
        {/* </div> */}
        <div className="nav-container">
            <Link className="nav-link">Main</Link>
            <Link className="nav-link">Band</Link>
            <Link className="nav-link">Retail</Link>
            <Link className="nav-link">Subscribe</Link>
            <img src={ham} alt="" className='ham' />
        </div>
    </nav>
  )
}
