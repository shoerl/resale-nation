import * as React from 'react';
import NavBarComponent from "../components/NavBarComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEbay, faInstagram, faInstagramSquare, faYoutube} from "@fortawesome/free-brands-svg-icons";


class ResaleNationContainer extends React.Component {

    render() {
        return (
            <div>
                <NavBarComponent/>
                    <div className="masthead text-black text-center container d-flex align-items-center flex-column">
                        <img className="masthead-avatar mb-5" src={"avatar.svg"} alt="..."/>
                        <h1 className="masthead-heading text-uppercase mb-0">Welcome to the Resale Nation!</h1>
                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                            <div className="divider-custom-line"></div>
                        </div>

                        <p className="masthead-subheading font-weight-light mb-0">
                            <div className="divider-custom divider-light" style={{gap: "1rem"}}>
                                <a className={"mr-2"} href={"#"}><FontAwesomeIcon icon={faYoutube} size={"3x"} style={{color: "red"}}/></a>
                                <div style={{width: '2.5rem'}} className="divider-custom-line"></div>
                                <a className={"ml-2 mr-2"} href={"#"}><FontAwesomeIcon className={"instagramIcon"} icon={faInstagram} size={"3x"}/></a>
                                <div style={{width: '2.5rem'}} className="divider-custom-line"></div>
                                <a className={"ml-2"} href={"#"}><FontAwesomeIcon icon={faEbay} size={"3x"} style={{color: "red"}}/></a>
                            </div>
                        </p>
                    </div>


                <section id="about" class="about" style={{paddingTop: "50px", paddingBottom: "500px"}}>
                    <div class="container" data-aos="fade-up">

                        <div class="section-title">
                            <h2>About</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div class="row">
                            <div class="col-lg-4">
                                <img src={"profile-img.jpg"} class="img-fluid" alt=""/>
                            </div>
                            <div class="col-lg-8 pt-4 pt-lg-0 content">
                                <h3>UI/UX Designer &amp; Web Developer.</h3>
                                <p class="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <ul>
                                            <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                                            <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                                            <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                                            <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-6">
                                        <ul>
                                            <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                                            <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                                            <li><i class="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
                                            <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <p>
                                    Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                                    Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

            </div>)




    }
}

export default ResaleNationContainer
