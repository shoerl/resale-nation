import * as React from "react";
import NavBar from "../components/navbar";
import "../styles/blog-styles.css"
import moment from "moment";
import { navigate } from "gatsby"
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const BlogPostTemplate = (context) => {
    let post = context.pageContext.post
    let date = moment(post.createdAt).format("MMMM DD, YYYY");

    return (
        <div>
            <NavBar/>
            <div className={"global-wrapper"}>
                <h1>{post.title}</h1>
                <p> Written on {date}</p>
                <hr className={"mb-3"}/>
                <div className={"blog-body"}>{ ReactHtmlParser(post.content.childMarkdownRemark.html) }</div>
                <footer style={{ position: "fixed", bottom: "5px"}}>
                    <button type="button" className="btn btn-danger mt-3" onClick={() => navigate(-1)}>{"Go Back"}</button>
                </footer>

            </div>

        </div>
    )

}

export default BlogPostTemplate