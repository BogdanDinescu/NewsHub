import Slider from 'react-perfect-slider';
import star from '../images/star.png'

function Reviews() {
    return (
        <Slider renderControls={(next, previous) => [
            <button className="btn btn-primary mx-2" onClick={previous}>Previous</button>,
            <button className="btn btn-primary mx-2" onClick={next}>Next</button>
        ]}
        autoplayDuration={5000}>
            <div>
                <img src="https://i.stockfaces.com/8GasEt3gypWuB19oHR" style={{borderRadius: '50%'}}/>
                <h2 className="blue-heading">Andrei</h2>
                <h6 className="text-muted">Inginer</h6>
                <img src={star} style={{width:'15px'}}/>
                <img src={star} style={{width:'15px'}}/>
                <img src={star} style={{width:'15px'}}/>
                <img src={star} style={{width:'15px'}}/>
                <img src={star} style={{width:'15px'}}/>
                <p><i>Cea mai bună aplicație! În sfârșit un loc al informării, nu al dezinformării</i></p>
            </div>
            <div>
                <img src="https://i.stockfaces.com/7caMCwMUtd3DCrLfks" style={{borderRadius: '50%'}}/>
                <h2 className="blue-heading">Mihai</h2>
                <h6 className="text-muted">Antreprenor</h6>
                <img src={star} style={{width:'15px'}}/>
                <img src={star} style={{width:'15px'}}/>
                <img src={star} style={{width:'15px'}}/>
                <img src={star} style={{width:'15px'}}/>
                <img src={star} style={{width:'15px'}}/>
                <p><i>Secțiunea de știri din business mă ajută enorm să fiu la curent</i></p>
            </div>
            <div>
                <img src="https://i.stockfaces.com/ASYVSPhES2ysYGs7ju" style={{borderRadius: '50%'}}/>
                <h2 className="blue-heading">Simona</h2>
                <h6 className="text-muted">PR</h6>
                <img src={star} style={{width:'15px'}}/>
                <img src={star} style={{width:'15px'}}/>
                <img src={star} style={{width:'15px'}}/>
                <img src={star} style={{width:'15px'}}/>
                <img src={star} style={{width:'15px'}}/>
                <p><i>Cel mai bun mod de a îți începe ziua</i></p>
            </div>
        </Slider>
    );
}

export default Reviews;