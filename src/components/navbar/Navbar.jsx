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
			<div className="nav-container">
				<div className="links-container">
					<Link className="nav-link" to='/'>Main</Link>
					<Link className="nav-link" to='/band'>Band</Link>
					<Link className="nav-link" to='/retail'>Shop</Link>
					<Link className="nav-link" to='/fans'>Fanzone</Link>
				</div>
				<img src={ham} alt="heavy metal fingers" className="ham" />
			</div>
		</nav>
	)
}
