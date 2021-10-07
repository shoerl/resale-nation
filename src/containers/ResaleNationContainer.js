import * as React from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import NavBarComponent from "../components/NavBarComponent";
import HomePageComponent from "../components/home/HomePageComponent";

class ResaleNationContainer extends React.Component {

    render() {
        return (
            <div className="container-fluid" style={{
                body: '#363537',
                text: '#FAFAFA',
                toggleBorder: '#6B8096',
                background: '#999',
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
