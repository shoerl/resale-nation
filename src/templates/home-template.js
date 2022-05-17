import * as React from "react";
import NavBar from "../components/navbar";
import WelcomeSection from "../components/welcome";
import AboutSection from "../components/about";
import BlogSection from "../components/blog";
import "../styles/styles.css"
import Seo from "../components/seo";

const HomeTemplate = (data) => {
    const blog_posts = data.pageContext.posts;
    return (
        <main>
            <Seo/>
            <NavBar/>
            <div>
                <WelcomeSection/>
                <AboutSection/>
                <BlogSection
                    posts={blog_posts}
                />
            </div>

        </main>
    )
}

export default HomeTemplate
