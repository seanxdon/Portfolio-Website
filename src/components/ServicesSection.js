//IMPORT ICONS
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from "../img/home2.png"

//STYLED COMPONENTS
import styled from 'styled-components'
import {AboutStyled, DescriptionStyled, ImageStyled} from '../styles'

const ServicesSection = () => {
  return(
    <ServicesStyled>
      <DescriptionStyled>
        <h2>High <span>quality</span> services</h2>
        <CardsStyled>
          <Cardstyled>
            <div className="icon">
              <img src={clock} alt="clock-icon"/>
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Cardstyled>
          <Cardstyled>
            <div className="icon">
              <img src={teamwork} alt="teamwork-icon"/>
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Cardstyled>
          <Cardstyled>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm-icon"/>
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Cardstyled>
          <Cardstyled>
            <div className="icon">
              <img src={money} alt="money-icon"/>
              <h3>Afforable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Cardstyled>
        </CardsStyled>
      </DescriptionStyled>
      <ImageStyled className="image">
        <img src={home2} alt="camera"/>
      </ImageStyled>
    </ServicesStyled>
  )
}

const ServicesStyled = styled(AboutStyled)`
  h2 {
    padding-bottom: 5rem;
  }
  p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const CardsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Cardstyled = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    background: #fff;
    color: black;
    padding: 1rem;
  }
`

export default ServicesSection;