import * as React from 'react';
import NavBarComponent from "../components/NavBarComponent";
import '../components/home/Blog.css'
import {Redirect, Route, BrowserRouter as Router} from "react-router-dom";
import HomePageComponent from "../components/home/HomePageComponent";

class ResaleNationContainer extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <NavBarComponent/>
                    <Route path="/home" exact={true}
                           render={() => <HomePageComponent/>}/>
                    <Route path="/" exact={true}>
                        <Redirect to="/home"/>
                    </Route>
                </Router>



            </div>)




    }
}

export default ResaleNationContainer
