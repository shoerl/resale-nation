import {Nav, Navbar} from "react-bootstrap";
import * as React from "react";
import {NavLink} from "react-router-dom";

class NavBarComponent extends React.Component {

    render() {
        return (
            <Navbar bg="dark" expand="md" variant="dark">
                <Navbar.Brand href="/home" className="nav-text" style={{marginLeft: '20px'}} >
                    Resale Nation
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav variant="pills" defaultActiveKey="/home" className="mr-auto">
                        <NavLink className="nav-text nav-link" to="/ebay-shop">Ebay Shop</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }


}

export default NavBarComponent
