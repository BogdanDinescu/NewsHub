import "./Navbar.css";
import React from "react";
import ScrollSpy from 'react-scrollspy-navigation';


const LinkButton = React.forwardRef(({ href, text }, ref) => (
    <a ref={ref} href={href} className="nav-link" aria-current="page">
      {text}
    </a>
  ));

function Navbar() {
    return(
        <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="#">NewsHub</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <ScrollSpy>
                        <LinkButton href="#home" text="Home" ref={React.createRef()} />
                        <LinkButton href="#features" text="Features" ref={React.createRef()} />
                        <LinkButton href="#pricing" text="Pricing" ref={React.createRef()} />
                </ScrollSpy>
                </ul>
                </div>
        </nav>
    );
}

export default Navbar;