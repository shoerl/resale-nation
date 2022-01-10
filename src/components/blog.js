import * as React from "react"
import '../styles/blog-styles.css'
import moment from "moment";

const BlogPreview = (post) => {
    let text = post.content.childMarkdownRemark.html.replace(/<[^>]+>/g, '')
    let date = moment(post.createdAt).format("DD MMM");

    return (
        <div className="col-lg-4">
            <div className="blog-grid">
                <div className="blog-img">
                    <div className="date">{date}</div>
                    <a href="#">
                        <img height="280" width="350" src={post.image.file.url}
                             title="" alt=""/>
                    </a>
                </div>
                <div className="blog-info">
                    <h2>{post.title}</h2>
                    <p style={{maxHeight: "100px", overflow: "hidden"}}>{text}</p>

                    <div className="btn-bar">
                        <a href={'/posts/' + post.id} className="px-btn-arrow">
                            <span>Read More</span>
                            <i className="arrow"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}

const BlogSection = (data) => {
    let posts = data.posts;
    let date = Date.parse(posts[0].createdAt)
    return (
        <section id="blog" className="blog" style={{paddingTop: "50px", paddingBottom: "500px"}}>
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Blog</h2>
                    <section className="section" id="blog">
                        <div className="row">
                            {posts.map((post) => {
                                return <BlogPreview {...post} />

                            })}

                        </div>

                    </section>
                </div>
            </div>
        </section>)}

export default BlogSection