import {Image, Nav, Navbar} from "react-bootstrap";
import * as React from "react";
import {NavLink} from "react-router-dom";
import './NavBarComponent.css'

class NavBarComponent extends React.Component {

    render() {
        return (
            <Navbar bg="dark" expand="md" variant="dark">
                <a href="#" className={"navbar-left"}>
                    <Image style={{maxWidth: 200, maxHeight: 60}} src={"Logo2.jpg"}/>
                </a>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav variant="pills" defaultActiveKey="/home" className="mr-auto">
                        <NavLink className="nav-text nav-link" to="/ebay-shop">Ebay Shop</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

    /**
     * <Navbar.Brand href="/home" className="ms-3 nav-text navbar-logo">
     *       </Navbar.Brand>
     */
}

export default NavBarComponent
