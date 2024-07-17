//styles
import "./social.css"

//assets
import face from "../../assets/facebook.png"
import insta from "../../assets/instagram.png"
import yt from "../../assets/youtube.png"
import spotify from "../../assets/spotify.png"

export default function Social() {
	return (
		<aside className="social">
			<a href="#" className="social-link">
				<img className="social-icon" src={face} alt="" />
			</a>
			<a href="#" className="social-link">
				<img className="social-icon" src={insta} alt="" />
			</a>
			<a href="#" className="social-link">
				<img className="social-icon" src={yt} alt="" />
			</a>
			<a href="#" className="social-link">
				<img className="social-icon" src={spotify} alt="" />
			</a>
		</aside>
	)
}
