import * as React from "react";
import NavBar from "../components/navbar";
import "../styles/github-markdown-light.css"
import moment from "moment";
import { navigate } from "gatsby"
import ReactHtmlParser from 'react-html-parser';
import Seo from "../components/seo";

const markdownStyle = {
    boxSizing: 'border-box',
    minWidth: '200px',
    maxWidth: '980px',
    margin: '0 auto',
    padding: '45px'
}

const BlogPostTemplate = (context) => {
    let post = context.pageContext.post
    let date = moment(post.createdAt).format("MMMM DD, YYYY");

    return (
        <main>
            <Seo title={"Blog Post " + post.id}/>
            <NavBar/>
            <div className={"global-wrapper markdown-body"} style={markdownStyle}>
                <h1>{post.title}</h1>
                <p> Written on {date}</p>
                <hr className={"mb-3"}/>
                <div className={"blog-body"}>{ ReactHtmlParser(post.content.childMarkdownRemark.html) }</div>
                <footer style={{ position: "fixed", bottom: "5px"}}>
                    <button type="button" className="btn btn-danger mt-3" onClick={() => navigate(-1)}>{"Go Back"}</button>
                </footer>
            </div>
        </main>
    )

}

export default BlogPostTemplate
