import { Parallax, Background } from 'react-parallax';
import logo from '../images/logo512.png'
import citynight from '../images/citynight.jpg'
import newspappers from '../images/newspappers.jpg'

function alert(percentage) {
    alert(percentage);
}

function Body() {
    return (
      <div>
        <Parallax
            bgImage={citynight}
            blur={{ min: -1, max: 2}}
            strength={-100}
        >
            <div style={{height: 1000}}>
               <img src={logo} style={{marginTop: '250px'}}/> 
            </div>
            
        </Parallax>
        <Parallax
            bgImage={newspappers}
            strength={200}
        >
            <div style={{height: 1000}}>
                <h1 style={{marginTop: '250px'}}>Tired of ads?</h1>
            </div>
        </Parallax>
        <Parallax
            strength={200}
        >
            <img src={logo}/>
        </Parallax>
      </div>
    );
  }
  
export default Body;