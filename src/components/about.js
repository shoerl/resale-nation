import * as React from "react"
import ProfileImg from "../images/profile-img.jpg";

const AboutSection = () => {
    return (
        <section id="about" className="about" style={{paddingTop: "50px", paddingBottom: "250px"}}>
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>About</h2>
                    <p>
                        Hi, My name is Zac and for fun and to make money I go to Garage Sales, Thrift Stores, Estate Sales,
                        and Flea Markets to buy items to flip on places like Ebay and Facebook Market Place. I like to buy anything
                        that’s cool or can make me a nice profit. I have sold items from Louis Vuitton shoes to vintage mid century modern chairs.
                        I have been reselling for 10 year since I was 14.
                    </p>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <img src={ProfileImg} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>Entrepenuer</h3>
                        <p>
                            On this site I will be sharing all the cool stuff I find to resell  as well as BOLOS and tips for reselling under my blog.
                            If you see something that you would like to buy, then please feel free to check out my eBay Store by clicking on the eBay logo thumbnail.
                            You can also contact me by clicking on the email hyperlink or phone number also accept Venmo and Cash App.
                            The mission of Resale Nation is to provide my customers with a variety of items for a great discounted price.

                            I also am interested in purchasing merchandise such as video games, electronics, cameras, vintage ti shirts, vinyls, stereo equipment, gold,
                            and silver. If you have something you think I would be interested in, please contact me via Instagram, email, or telephone.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i><strong>Phone:</strong> <a href={"tel:9788065780"}><span>978-806-5780</span></a></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i><strong>Email:</strong> <a href={"mailto:theresalenation@gmail.com"}><span>theresalenation@gmail.com</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            If you live in the Merrimack Valley area or Southern New Hampshire I would love to come by to take a
                            look at stuff you want to get rid of when your trying to downsize or move. Please also check out my growing YouTube
                            Channel Resale Nation. I like to also record me finding great deals on items to resell. I like to take my audience along with
                            me to watch me source items and negotiate at flea markets and garage sales. I also like showing my audience to whole process from
                            buying the item to shipping it.  I also like to educate my viewers on what items to look for at garage sales and thrift stores that you
                            can buy for cheap and resell for a nice return!
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutSection
