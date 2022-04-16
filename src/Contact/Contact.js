function Contact() {
    return (
    <div className="row p-5">
        <div className="col-md-6 col-12">
            <h2 className="blue-heading">Get in touch with us!</h2>
            <span>
                <p>You can conctact us here or with the following form</p>
                <p><div className='blue'>Address:</div> 345 Flowers St, Marylebone, London UK</p>
                <p><div className='blue'>Email:</div> <a className='nolink' href="mailto:contact@newshub.com">contact@newshub.com</a></p>
                <p><div className='blue'>Phone:</div> 0722 222 222</p>
            </span>
        </div>
        <form className="col-md-4 col-12 mt-md-1 mt-5">
            <div className="form-group">
                <label htmlFor="inputName">Name</label>
                <input className="form-control" id="inputName" placeholder="Enter name"/>
            </div>
            <div className="form-group">
                <label htmlFor="inputEmail">Email address</label>
                <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className='form-group'>
                <label htmlFor="inputMessage">Message</label>
                <textarea className="form-control" id="inputMessage" placeholder="Enter message here"/>
            </div>
            <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </form>
    </div>
    );
  }

export default Contact