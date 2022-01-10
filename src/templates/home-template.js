import * as React from "react";
import NavBar from "../components/navbar";
import WelcomeSection from "../components/welcome";
import AboutSection from "../components/about";
import BlogSection from "../components/blog";
import "../styles/styles.css"

const HomeTemplate = (data) => {
    const blog_posts = data.pageContext.posts;
    return (
        <main>
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