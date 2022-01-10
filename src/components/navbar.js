import React from "react";
import LogoSrc from "../images/Logo2.png"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg text-uppercase fixed-top pt-1 pb-1" id="mainNav" style={{backgroundColor: "#2c3e50"}}>
            <div className="container">
                <a className="navbar-brand text-white rounded" href="#"><img style={{maxWidth: 800, maxHeight: 75}} src={LogoSrc}/></a>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
                        type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu&nbsp;
                    <i className="fas fa-bars"/>
                </button>


                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded text-white"
                                                                 href="#about">About & Contact</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded text-white"
                                                                 href="#portfolio">Blog</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
