import * as React from "react";
import './HomePageComponent.css'
import {Col, Container, Image, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";

class HomePageComponent extends React.Component {

    render() {
        return (
            <Container>
                 <Row className={"mt-2"}>
                         <h1 className={"mt-3 text-center text-black"}> Welcome to the Resale Nation!</h1>
                 </Row>

                <Row className={"mt-3"} style={{maxWidth: 1000, marginLeft: "auto", marginRight: "auto"}}>
                    <Row style={{marginLeft: "auto", marginRight: "auto"}}>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/YLI75W1i9L0"></iframe>
                        </div>
                    </Row>
                    <Row className={"mt-2"} style={{display: "inline"}}>

                            <a href={"https://www.youtube.com/channel/UCu4TGx_HAkA9b0jWH7NFQuA"}>
                                <FontAwesomeIcon style={{color: "#c4302b"}} className={"ml-2 mr-2"} icon={faYoutube} size={"3x"}/>
                            </a>
                            <a href={"https://www.instagram.com/resalenation1997/"}>
                                <FontAwesomeIcon style={{color: "#3f729b"}} className={"ml-2 mr-2"} icon={faInstagram} size={"3x"}/>
                            </a>
                    </Row>
                </Row>





            </Container>
        )
    }
}


export default HomePageComponent
