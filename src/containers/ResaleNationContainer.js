import * as React from 'react';
import NavBarComponent from "../components/NavBarComponent";

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
                                <a className={"mr-2"} href={"#"}><img src="youtube.svg" class="img-fluid" alt="" height={100} width={100}/></a>
                                <div style={{width: '2.5rem'}} className="divider-custom-line"></div>
                                <a className={"ml-2 mr-2"} href={"#"}><img src="instagram.svg" class="img-fluid" alt="" height={100} width={100}/></a>
                                <div style={{width: '2.5rem'}} className="divider-custom-line"></div>
                                <a className={"ml-2"} href={"#"}> <img src="ebay.svg" class="img-fluid" alt="" height={100} width={100}/> </a>

                            </div>
                        </p>
                    </div>


                <section id="about" class="about" style={{paddingTop: "50px", paddingBottom: "500px"}}>
                    <div class="container" data-aos="fade-up">

                        <div class="section-title">
                            <h2>About</h2>
                            <p>Hi! Welcome to Resale Nation. My name is Zac and for fun and to make money I go to Garage Sales,
                               Thrift Stores, Estate Sales, and Flea Markets to buy items to flip on places like Ebay and Facebook Market Place.
                               I like to buy anything that’s cool or can make me a nice profit. I have sold items from Louis Vuitton shoes to vintage
                               mid century modern chairs. I have been reselling for 10 years, since I was 14.
                            </p>
                        </div>

                        <div class="row">
                            <div class="col-lg-4">
                                <img src={"profile-img.jpg"} class="img-fluid" alt=""/>
                            </div>
                            <div class="col-lg-8 pt-4 pt-lg-0 content">
                                <h3>Entrepenuer</h3>
                                <p class="fst-italic">
                                    On this site I will be sharing all the cool stuff I find to resell. If you see something that you would like to buy, then please feel free to check out my Ebay Store or Message me as I also accept Venmo and Cash App. The mission of Resale Nation is to provide my customers with a variety of items for a great discounted price.

                                    I also Buy as well if you have old video games, electronics, cameras, vintage ti shirts, vinyls, stereo equipment, gold, and silver then please contact me through either my instagram or cell.
                                </p>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <ul>
                                            <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+1 978 806 5780</span></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-6">
                                        <ul>
                                            <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>abc@gmail.com</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <p>
                                    If you live in the Merrimack Valley area or Southern New Hampshire I would love to come by to take a look at stuff you want to get rid
                                    of when your trying to downsize or move. Please also check out my growing YouTube Channel Resale Nation. I like to also record me finding
                                    great deals on items to resell. I like to take my audience along with me to watch me source items and negotiate at flea markets and garage sales.
                                    I also like showing my audience to whole process from buying the item to shipping it.  I also like to educate my viewers on what items to look for at garage
                                    sales and thrift stores that you can buy for cheap and resell for a nice return!
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

            </div>)




    }
}

export default ResaleNationContainer
