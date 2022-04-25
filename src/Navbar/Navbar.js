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
        <nav id="navbar" className=" container-fluid navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a href="#" className="navbar-brand">NewsHub</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <ScrollSpy>
                        <LinkButton href="#home" text="Home" ref={React.createRef()} />
                        <LinkButton href="#features" text="Features" ref={React.createRef()} />
                        <LinkButton href="#pricing" text="Pricing" ref={React.createRef()} />
                        <LinkButton href="#reviews" text="Reviews" ref={React.createRef()} />
                        <LinkButton href="#team" text="Team" ref={React.createRef()} />
                        <LinkButton href="#publisher" text="Publisher" ref={React.createRef()} />
                        <LinkButton href="#contact" text="Contact" ref={React.createRef()} />
                </ScrollSpy>
                </ul>
                </div>
        </nav>
    );
}

export default Navbar;