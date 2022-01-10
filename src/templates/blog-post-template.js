import * as React from "react";
import NavBar from "../components/navbar";
import "../styles/blog-styles.css"
import moment from "moment";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const BlogPostTemplate = (context) => {
    let post = context.pageContext.post
    let date = moment(post.createdAt).format("MMMM DD, YYYY");
    console.log(date);
    console.log(post);

    return (
        <div>
            <NavBar/>
            <div className={"global-wrapper"}>
                <h1>{post.title}</h1>
                <p> Written on {date}</p>
                <hr className={"mb-3"}/>
                <div>{ ReactHtmlParser(post.content.childMarkdownRemark.html) }</div>

            </div>


        </div>
    )

}

export default BlogPostTemplate