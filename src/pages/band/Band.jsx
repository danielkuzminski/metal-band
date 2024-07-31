//styles
import "./band.css"

//assets
import guitar from '../../assets/guitar.png'
import microphone from '../../assets/microphone.png'
import bass from '../../assets/bass.png'
import drum from '../../assets/drum.png'

export default function Band() {
	return (
		<div className="band">
			<h2 className="band-name">Raiders of doom</h2>
			<section className="band-description-container">
				<h3 className="band-title">Forging Metal Since 2005</h3>
				<p className="band-description">
					Emerging from the industrial heart of Birmingham, UK, Raiders of Doom
					has been igniting stages and thrilling audiences worldwide with their
					electrifying blend of classic and modern heavy metal. Formed in 2005,
					the band is known for their blistering guitar solos, thunderous
					drumming, and soaring vocals that capture the essence of metal’s
					golden era while pushing the genre into new and uncharted territories.
				</p>
			</section>
			<section className="the-band-container">
				<h4 className="band-description-title">Not just another metal band</h4>
        <div className="member-container">
          <p className="the-band-member">
            Axel “The Axe” Thompson <img src={microphone} alt="microphone icon" className="instrument" /><img src={guitar} alt="guitar icon" className="instrument" />
          </p>
          <div className="profile lead"></div>
          <p className="the-band-member-description">
            Axel’s powerful voice and razor-sharp guitar riffs have been at the
            forefront of Thunderforge’s sound since its inception. His stage
            presence and songwriting prowess have earned him a reputation as one
            of the most dynamic frontmen in metal today.
          </p>
        </div>
        <div className="member-container">
          <p className="the-band-member">
          Jack “The Shredder” Black <img src={guitar} alt="guitar icon" className="instrument" />
          </p>
          <div className="profile guitar"></div>
          <p className="the-band-member-description">
          Known for his lightning-fast solos and intricate melodies, Jack brings a unique flair to the band’s sound. His technical skill and creative compositions are pivotal to Raiders of Doom signature style.
          </p>
        </div>
        <div className="member-container">
          <p className="the-band-member">
          Leo “The Hammer” Morgan <img src={bass} alt="bass guitar icon" className="instrument" />
          </p>
          <div className="profile bass"></div>
          <p className="the-band-member-description">
          Leo’s deep, driving bass lines provide the heavy backbone of Raiders of Doom music. His rhythmic precision and powerful stage energy make him a fan favorite.
          </p>
        </div>
        <div className="member-container">
          <p className="the-band-member">
          Ethan “Thunderfoot” Davis <img src={drum} alt="drum set icon" className="instrument" />
          </p>
          <div className="profile drum"></div>
          <p className="the-band-member-description">
          With his intense drumming and relentless energy, Ethan delivers the thunder in Raiders of Doom. His explosive beats and complex rhythms set the pace for the band’s electrifying performances.
          </p>
        </div>
			</section>
      <section className="metal">
        <h3 className="band-title">Our Sound</h3>
        <p className="about-sound-description">
        Raiders of Doom draws inspiration from the legends of heavy metal while infusing their music with a fresh and innovative spirit. Their albums are a sonic journey through anthemic choruses, epic storytelling, and fierce instrumentation, with themes exploring power, resilience, and the eternal battle between light and darkness.
        </p>
      </section>
      <section className="achievements">
        <h3 className="band-title">Achievements</h3>
        <div className="achivement-container">
          <h4 className="band-description-title">Award-Winning Albums</h4>
          <p className="achivement-description">

            Raiders of Doom discography boasts several award-winning albums, with Metal Phoenix being hailed as a modern classic in the metal community.
          </p>
        </div>
        <div className="achivement-container">
          <h4 className="band-description-title">Worldwide Tours</h4>
          <p className="achivement-description">
          The band has headlined sold-out shows across Europe, North America, and Asia, captivating audiences with their high-energy performances and magnetic stage presence.
          </p>
        </div>
        <div className="achivement-container">
          <h4 className="band-description-title">Metal Festivals</h4>
          <p className="achivement-description">
            Raiders of Doom has been a prominent act at renowned festivals such as Wacken Open Air, Download Festival, and Hellfest, sharing the stage with metal titans and continuing to expand their loyal fan base.
          </p>
        </div>
      </section>
      <section className="mission">
        <h3 className="band-title">Our Mission</h3>
        <p className="legacy">
        At Raiders of Doom, we believe in the power of music to unite and inspire. Our mission is to forge unforgettable experiences through our music and connect with fans who share our passion for heavy metal. Join us on our journey and become part of the Raiders of Doom legacy!
        </p>
      </section>
			
		</div>
	)
}
