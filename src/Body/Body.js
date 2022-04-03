import './Body.css';
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';
import Pricing from '../Pricing/Pricing';
import { Parallax, Background } from 'react-parallax';
import logo from '../images/logo512.png'
import citynight from '../images/citynight.jpg'
import newspappers from '../images/newspappers.jpg'


function Body() {
    return (
      <div>
        <div id="home">
            <Parallax
                bgImage={citynight}
                blur={{ min: -3, max: 4}}
                strength={100}
                style={{height: 1000}}
            >
                <img src={logo} style={{marginTop: '250px'}}/>
            </Parallax>
        </div>
        <div id="features">
            <Parallax
                bgImage={newspappers}
                strength={200}
                style={{height: 1000}}
            >
                <h1 style={{marginTop: '250px'}}>Tired of ads?</h1>
            </Parallax>
        </div>
        <div id="pricing">
            <Parallax>
                <Pricing/>
            </Parallax>
        </div>
        <div id="reviews">
            <Parallax>
                <Reviews/>
            </Parallax>
        </div>
        <div id="team"></div>
        <div id="contact">
            <Parallax>
               <Contact/>
            </Parallax>
        </div>
        <div id="footer">
            <Parallax
                strength={200}
            >
                <img src={logo}/>
                <p>Copyright ©2022</p>
            </Parallax>
        </div>
      </div>
    );
  }
  
export default Body;