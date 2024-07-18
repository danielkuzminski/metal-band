//react
// import { useState } from "react"

//styles
import "./navbar.css"

//assets
// import logo from "../../assets/logo.png"
import ham from "../../assets/ham.png"

//router
import { Link } from "react-router-dom"

export default function Navbar() {
	// const [show, setShow] = useState(false)

	// const handleShow = () => {
	// 	setShow(!show)
	// }

	return (
		<nav className="navbar">
			{/* <div className="logo-container"> */}
			{/* <img src={logo} alt="" className="logo" /> */}
			{/* </div> */}
			<div className="nav-container">
				{/* <div className={show ? "links-container" : "hide"}> */}
				<div className="links-container">
					<Link className="nav-link" to='/'>Main</Link>
					<Link className="nav-link" to='/band'>Band</Link>
					<Link className="nav-link" to='/retail'>Retail</Link>
					<Link className="nav-link" to='/fans'>Fanzone</Link>
				</div>
				{/* <img src={ham} alt="" className="ham" onClick={handleShow} /> */}
				<img src={ham} alt="" className="ham" />
			</div>
		</nav>
	)
}
