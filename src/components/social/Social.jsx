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
			<a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="social-link">
				<img className="social-icon" src={face} alt="facebook icon" />
			</a>
			<a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="social-link">
				<img className="social-icon" src={insta} alt="instagram icon" />
			</a>
			<a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="social-link">
				<img className="social-icon" src={yt} alt="youtube icon" />
			</a>
			<a href="https://www.spotify.com" target="_blank" rel="noreferrer" className="social-link">
				<img className="social-icon" src={spotify} alt="spotify icon" />
			</a>
		</aside>
	)
}
