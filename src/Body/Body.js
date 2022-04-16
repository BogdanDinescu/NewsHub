import './Body.css';
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';
import Pricing from '../Pricing/Pricing';
import Features from '../Features/Features';
import { Parallax, Background } from 'react-parallax';
import logo from '../images/logo512.png'
import citynight from '../images/citynight.jpg'
import newspappers from '../images/newspappers.jpg'
import coin from '../images/coin.jpg'
import darktexture from '../images/darktexture.jpg'
import keyboard from '../images/keyboard.jpg'

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
                style={{height: "1000px"}}
            >
                <Features/>
            </Parallax>
        </div>
        <div id="pricing">
            <Parallax
                bgImage={coin}
                strength={300}
                style={{height: "1000px"}}
            >
                <Pricing/>
            </Parallax>
        </div>
        <div id="reviews">
            <Parallax
                bgImage={darktexture}
                strength={200}
                style={{height: "1000px"}}
            >
                <Reviews/>
            </Parallax>
        </div>
        <div id="team"></div>
        <div id="contact">
            <Parallax
                bgImage={keyboard}
                blur={{ min: -3, max: 4}}
                strength={200}
                style={{height: "1000px"}}
            >
               <Contact/>
            </Parallax>
        </div>
        <div id="footer">
            <Parallax
                strength={200}
            >
                <img src={logo} style={{height: "200px", margin: "40px"}}/>
                <p>Copyright ©2022</p>
            </Parallax>
        </div>
      </div>
    );
  }
  
export default Body;