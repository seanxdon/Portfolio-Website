//IMAGES
import home1 from '../img/home1.png'

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>your <span>dreams</span>come</h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium in voluptatum ad ut neque possimus, velit laborum suscipiton.</p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={home1} alt="Guy With Camera"/>
      </div>
    </div>
  )
}

export default AboutSection;