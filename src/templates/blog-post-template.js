import * as React from "react";
import NavBar from "../components/navbar";
import "../styles/blog-styles.css"
import moment from "moment";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogPostTemplate = (context) => {
    let post = context.pageContext.post
    let date = moment(post.createdAt).format("MMMM DD, YYYY");
    console.log(post.content.childMarkdownRemark.rawMarkdownBody);

    return (
        <div>
            <NavBar/>
            <div className={"global-wrapper"}>
                <h1>{post.title}</h1>
                <p> Written on {date}</p>
                <hr className={"mb-3"}/>
                <div className={"blog-body"}> <ReactMarkdown children={post.content.childMarkdownRemark.rawMarkdownBody} remarkPlugins={[remarkGfm]} /> </div>

            </div>


        </div>
    )

}

export default BlogPostTemplate