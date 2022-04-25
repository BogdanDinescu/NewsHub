function Publisher() {
    return(
        <div className="row justify-content-center" style={{marginTop: "100px"}}>
            <h1 className="blue-heading">Publisher</h1>
            <p className="mb-3">You can freely pusblish your content here and find your audience. Here is what you need to do:</p>
            <ul class="list-group col-md-4">
                <li className="list-group-item">You can start to sign up for an account, which is free by the way.</li>
                <li className="list-group-item">After signing up, you need to verify your account as an publisher.</li>
                <li className="list-group-item">You can start to write freely.</li>
                <li className="list-group-item">Earn a share of our ad and subscription revenue.</li>
                <li className="list-group-item list-group-item-success">
                    Learn about your audience. View analitycs on who views your content.
                    <span className="badge text-dark">PREMIUM ONLY</span>
                </li>
            </ul>
            <p className="font-weight-bold p-5"><span class="badge text-info">INFO</span><strong>If you represent a news agency, please contact us for a contract of collaboration.</strong></p>
        </div>
    )
}

export default Publisher