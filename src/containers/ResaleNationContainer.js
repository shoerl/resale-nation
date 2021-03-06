import * as React from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import NavBarComponent from "../components/NavBarComponent";
import HomePageComponent from "../components/home/HomePageComponent";
import {Col} from "react-bootstrap";

class ResaleNationContainer extends React.Component {

    render() {
        return (
            <div className="container-fluid" style={{
                text: '#FAFAFA',
                toggleBorder: '#6B8096',
                height:'100vh'
            }}>
                <Router>

                        <NavBarComponent></NavBarComponent>

                    <Route path="/home" exact={true}
                           render={(props) =>
                               <HomePageComponent
                                   {...props}
                               />}/>
                    <Route path="/" exact={true}>
                        <Redirect to="/home"/>
                    </Route>
                </Router>
            </div>
        )
    }
}

export default ResaleNationContainer
