//IMAGES
import home1 from '../img/home1.png'
//STYLED COMPONENTS
import styled from 'styled-components';

const AboutSection = () => {
  return (
    <AboutStyled>
      <DescriptionStyled>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>your <span>dreams</span>come</h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium in voluptatum ad ut neque possimus, velit laborum suscipiton.</p>
        <button>Contact Us</button>
      </DescriptionStyled>
      <ImageStyled>
        <img src={home1} alt="Guy With Camera"/>
      </ImageStyled>
    </AboutStyled>
  )
}

//Styled Components
const AboutStyled = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`

const DescriptionStyled = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`

const ImageStyled = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`
const Hide = styled.div`
  overflow: hidden;
`

export default AboutSection;