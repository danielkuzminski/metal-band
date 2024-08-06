//styles
import './fans.css'

export default function Fans() {
  return (
    <div className='fanzone'>
      <h2 className='fanzone-title'>
        Join our fan club!!
      </h2>
      <p className="fanzone-text">
        Subscribe today for our newsletter. Get the most of being a member of our fan club, icluding extra discounts on tickets and our merchandise!
      </p>
      <form className='fanzone-form'>
        <label>
          <span>Name</span>
          <input type="text" />
        </label>
        <label>
          <span>Surname</span>
          <input type="text" />
        </label>
        <label>
          <span>email</span>
          <input type="email" />
        </label>
        <button type="submit" className='submit-btn'>
          submit
        </button>
      </form>
    </div>
  )
}
