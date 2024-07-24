//styles
import "./home.css"

//assets
import fire from "../../assets/fire.png"
import heavy from "../../assets/heavy-metal.png"
import cover from "../../assets/cover.jpeg"
import star from "../../assets/star.png"
import pic1 from '../../assets/gallery/pic-01.jpeg'
import pic2 from '../../assets/gallery/pic-02.jpeg'
import pic3 from '../../assets/gallery/pic-03.jpeg'
import pic4 from '../../assets/gallery/pic-04.jpeg'
import pic5 from '../../assets/gallery/pic-05.jpeg'
import pic6 from '../../assets/gallery/pic-06.jpeg'

export default function Home() {
	return (
		<div className="home">
			<section className="landing">
				<h1 className="home__title">raiders of doom</h1>
			</section>
			<section className="tour">
				<h2 className="tour-title">Now on tour</h2>
				<div className="tour-container">
					<div className="tour-card">
						<h2 className="tour-city">
							<img className="fire" src={fire} alt="icon of flame" />
							Gdansk
						</h2>
						<p className="tour-date">14-08-2024</p>
						<p className="tour-info">Gdansk Amber Arena</p>
						<button className="tour-cta">tickets</button>
					</div>
					<div className="tour-card">
						<h2 className="tour-city">Warszawa</h2>
						<p className="tour-date">21-08-2024</p>
						<p className="tour-info">Stadion Narodowy</p>
						<button className="tour-cta">tickets</button>
					</div>
					<div className="tour-card">
						<h2 className="tour-city">Krakow</h2>
						<p className="tour-date">28-08-2024</p>
						<p className="tour-info">Tauron Arena</p>
						<button className="tour-cta">tickets</button>
					</div>
				</div>
			</section>
			<section className="flames">
				<div className="flames-container"></div>
			</section>
			<section className="album">
				<h2 className="album-title">
					<img className="fingers" src={heavy} alt="rock fingers" />
					New Album Out Now{" "}
					<img className="fingers" src={heavy} alt="rock fingers" />
				</h2>
				<img src={cover} alt="" className="album-cover" />
			</section>
			<section className="reviews">
				<div className="review">
					<span className="bar"></span>
					<p className="review-brief">
						"Apocalypse Now by Raiders of Doom soars with blazing riffs and
						thunderous vocals. An exhilarating ride from start to finish, this
						album is a must-listen for any metal enthusiast."
					</p>
					<div className="review-stars">
						<img className="star" src={star} alt="icon of star" />
						<img className="star" src={star} alt="icon of star" />
						<img className="star" src={star} alt="icon of star" />
						<img className="star" src={star} alt="icon of star" />
						<img className="star" src={star} alt="icon of star" />
					</div>
					<p className="reviewer">Headbangers</p>
					<span className="bar"></span>
				</div>
				<div className="review">
					<span className="bar"></span>
					<p className="review-brief">
						"Raiders of Doom delivers electrifying solos and powerful anthems. A
						masterclass in heavy metal, each track ignites with energy and raw
						intensity. Highly recommended!"
					</p>
					<div className="review-stars">
						<img className="star" src={star} alt="icon of star" />
						<img className="star" src={star} alt="icon of star" />
						<img className="star" src={star} alt="icon of star" />
						<img className="star" src={star} alt="icon of star" />
						<img className="star" src={star} alt="icon of star" />
					</div>
					<p className="reviewer">Metal Forever</p>
					<span className="bar"></span>
				</div>
				<div className="review">
					<span className="bar"></span>
					<p className="review-brief">
						"Experience heavy metal perfection with new album 'Apocalypse Now'.
						Captivating melodies and fierce drumming create a relentless
						soundscape. A phenomenal album that demands your attention!"
					</p>
					<div className="review-stars">
						<img className="star" src={star} alt="icon of star" />
						<img className="star" src={star} alt="icon of star" />
						<img className="star" src={star} alt="icon of star" />
						<img className="star" src={star} alt="icon of star" />
						<img className="star" src={star} alt="icon of star" />
					</div>
					<p className="reviewer">This is Music</p>
					<span className="bar"></span>
				</div>
			</section>
			<section className="gallery">
				<div className="gallery-container">
					<img src={pic1} alt="band playing on stage" className="band-pic" />
					<img src={pic2} alt="band playing on stage" className="band-pic" />
					<img src={pic3} alt="band playing on stage" className="band-pic" />
					<img src={pic4} alt="band playing on stage" className="band-pic" />
					<img src={pic5} alt="band playing on stage" className="band-pic" />
					<img src={pic6} alt="band playing on stage" className="band-pic" />
				</div>
			</section>
			{/* add gallery section */}
		</div>
	)
}
