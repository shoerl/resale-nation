import * as React from "react";
import './HomePageComponent.css'
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagramSquare, faYoutube} from "@fortawesome/free-brands-svg-icons";

class HomePageComponent extends React.Component {

    render() {
        return (
            <Container className={"w-100 h-100"}>
                 <Row> <h1 className={"mt-3 text-center text-black"}> Welcome to the Resale Nation!</h1></Row>
                <Row className={"w-100 h-75 mt-4"}>
                <div className="w-100 h-100 ms-auto me-auto embed-responsive embed-responsive-16by9 youtube-player">
                    <iframe className="w-100 h-100 ms-auto me-auto embed-responsive-item" src="https://www.youtube.com/embed/YLI75W1i9L0"
                            allowFullScreen></iframe>
                </div> </Row>
                <Row className={"mt-3"}>
                    <Col md="1" lg="1" xl="1" xxl="1">
                    <a href={"https://www.youtube.com/channel/UCu4TGx_HAkA9b0jWH7NFQuA"}>
                        <FontAwesomeIcon className={"ml-2 mr-2"} icon={faYoutube} size={"4x"}/>
                    </a>
                    </Col>
                    <Col md="1" lg="1" xl="1" xxl="1">
                    <a href={"https://www.instagram.com/resalenation1997/"}>
                        <FontAwesomeIcon className={"ml-2 mr-2"} icon={faInstagramSquare} size={"4x"}/>
                    </a>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default HomePageComponent
