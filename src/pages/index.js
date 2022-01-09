import * as React from "react"
import './styles.css'
import './blog-styles.css'
import AvatarSvg from '../images/avatar.svg'
import NavBar from "./navbar";
import EbayImg from '../images/ebay.svg'
import InstagramImg from '../images/instagram.svg'
import YoutubeImg from '../images/youtube.svg'
import ProfileImg from '../images/profile-img.jpg'
// markup
const Blog = () => {
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

const IndexPage = () => {
  return (
    <main>
      <NavBar/>
      <div>
        <div className="masthead text-black text-center container d-flex align-items-center flex-column">
          <img className="masthead-avatar mb-5" src={AvatarSvg} alt="..."/>
          <h1 className="masthead-heading text-uppercase mb-0">Welcome to the Resale Nation!</h1>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>

          <p className="masthead-subheading font-weight-light mb-0">
            <div className="divider-custom divider-light" style={{gap: "1rem"}}>
              <a className={"mr-2"} href={"#"}><img src={YoutubeImg} className="img-fluid" alt=""
                                                    height={100} width={100}/></a>
              <div style={{width: '2.5rem'}} className="divider-custom-line"></div>
              <a className={"ml-2 mr-2"} href={"#"}><img src={InstagramImg} className="img-fluid" alt=""
                                                         height={100} width={100}/></a>
              <div style={{width: '2.5rem'}} className="divider-custom-line"></div>
              <a className={"ml-2"} href={"#"}> <img src={EbayImg} className="img-fluid" alt="" height={100}
                                                     width={100}/> </a>

            </div>
          </p>
        </div>

        <section id="about" className="about" style={{paddingTop: "50px", paddingBottom: "500px"}}>
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>About</h2>
              <p>Hi! Welcome to Resale Nation. My name is Zac and for fun and to make money I go to Garage Sales,
                Thrift Stores, Estate Sales, and Flea Markets to buy items to flip on places like Ebay and
                Facebook Market Place.
                I like to buy anything that’s cool or can make me a nice profit. I have sold items from Louis
                Vuitton shoes to vintage
                mid century modern chairs. I have been reselling for 10 years, since I was 14.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <img src={ProfileImg} className="img-fluid" alt=""/>
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content">
                <h3>Entrepenuer</h3>
                <p>
                  On this site I will be sharing all the cool stuff I find to resell. If you see something
                  that you would like to buy, then please feel free to check out my Ebay Store or Message me
                  as I also accept Venmo and Cash App. The mission of Resale Nation is to provide my customers
                  with a variety of items for a great discounted price.

                  I also Buy as well if you have old video games, electronics, cameras, vintage ti shirts,
                  vinyls, stereo equipment, gold, and silver then please contact me through either my
                  instagram or cell.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+1 978 806 5780</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong>
                        <span>abc@gmail.com</span></li>
                    </ul>
                  </div>
                </div>
                <p>
                  If you live in the Merrimack Valley area or Southern New Hampshire I would love to come by
                  to take a look at stuff you want to get rid
                  of when your trying to downsize or move. Please also check out my growing YouTube Channel
                  Resale Nation. I like to also record me finding
                  great deals on items to resell. I like to take my audience along with me to watch me source
                  items and negotiate at flea markets and garage sales.
                  I also like showing my audience to whole process from buying the item to shipping it. I also
                  like to educate my viewers on what items to look for at garage
                  sales and thrift stores that you can buy for cheap and resell for a nice return!
                </p>
              </div>
            </div>

          </div>
        </section>

        <Blog/>

      </div>
    </main>
  )
}

export default IndexPage
