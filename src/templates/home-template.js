import * as React from "react";
import NavBar from "../components/navbar";
import WelcomeSection from "../components/welcome";
import AboutSection from "../components/about";
import BlogSection from "../components/blog";
import "../styles/styles.css"

const HomeTemplate = (data) => {
    console.log(data)
    return (
        <main>
            <NavBar/>
            <div>
                <WelcomeSection/>
                <AboutSection/>
                <BlogSection/>
            </div>

        </main>
    )
}

export default HomeTemplate