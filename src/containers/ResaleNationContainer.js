import * as React from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import NavBarComponent from "../components/NavBarComponent";
import HomePageComponent from "../components/home/HomePageComponent";
import {Col} from "react-bootstrap";

class ResaleNationContainer extends React.Component {

    render() {
        return (
            <div>
                <NavBarComponent/>
                    <div className="masthead text-black text-center container d-flex align-items-center flex-column">
                        <img className="masthead-avatar mb-5" src={"avatar.svg"} alt="..."/>
                        <h1 className="masthead-heading text-uppercase mb-0">Welcome to the Resale Nation!</h1>
                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                            <div className="divider-custom-line"></div>
                        </div>
                        <p className="masthead-subheading font-weight-light mb-0">Youtube - Instagram - Ebay - Tiktok</p>
                    </div>

            </div>)




    }
}

export default ResaleNationContainer
