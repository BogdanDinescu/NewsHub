function Pricing() {
    return (
        <div className="p-5 row justify-content-center g-0" style={{marginTop: "250px"}}>
            <div className="card text-center text-dark border-secondary col-md-3 mx-2">
                <div className="card-header blue-heading">
                    <h3 className="card-title">FREE</h3>
                    <p>0$/month</p>
                </div>
                <ul className="card-body list-group-flush ">
                    <li className="list-group-item">Ads</li>
                    <li className="list-group-item">Default feed</li>
                    <li className="list-group-item">Can't save articles for later</li>
                    <li className="list-group-item">-</li>
                </ul>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">Select</a>
                </div>
            </div>

            <div className="card text-center text-dark border-primary col-md-3 mx-2">
                <div className="card-header blue-heading">
                    <h3 className="card-title">PREMIUM</h3>
                    <p>4$/month</p>
                </div>
                <ul className="card-body list-group-flush ">
                    <li className="list-group-item">No ads</li>
                    <li className="list-group-item">Personalize feed</li>
                    <li className="list-group-item">Save articles for later</li>
                    <li className="list-group-item">Exclusive content</li>
                </ul>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">Select</a>
                </div>
            </div>
        </div>
    );
}

export default Pricing;