//styles
import "./home.css"

//assets
import fire from "../../assets/fire.png"
import heavy from "../../assets/heavy-metal.png"
import cover from '../../assets/cover.jpeg'

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
					New Album Out Now <img className="fingers" src={heavy} alt="rock fingers" />
				</h2>
				<img src={cover} alt="" className="album-cover" />
			</section>
		</div>
	)
}
