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
            <Parallax
                strength={200}
            >
                <img src={logo}/>
            </Parallax>
        </div>
      </div>
    );
  }
  
export default Body;