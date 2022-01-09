import * as React from "react"
import '../styles/blog-styles.css'

const BlogSection = () => {
    return (
        <section id="blog" className="blog" style={{paddingTop: "50px", paddingBottom: "500px"}}>
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Blog</h2>
                    <section className="section" id="blog">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="blog-grid">
                                    <div className="blog-img">
                                        <div className="date">04 FEB</div>
                                        <a href="#">
                                            <img src="https://via.placeholder.com/350x280/FFB6C1/000000"
                                                 title="" alt=""/>
                                        </a>
                                    </div>
                                    <div className="blog-info">
                                        <h5><a href="#">Prevent 75% of visitors from google analytics</a>
                                        </h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod.</p>
                                        <div className="btn-bar">
                                            <a href="#" className="px-btn-arrow">
                                                <span>Read More</span>
                                                <i className="arrow"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </section>
                </div>
            </div>
        </section>)}

export default BlogSection