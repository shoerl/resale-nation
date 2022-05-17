import * as React from "react"
import AvatarImg from "../images/avatar.jpg";
import YoutubeImg from "../images/youtube.svg";
import InstagramImg from "../images/instagram.svg";
import EbayImg from "../images/ebay.svg";

const WelcomeSection = () => {
    return (
        <div className="masthead text-black text-center container d-flex align-items-center flex-column">
            <img className="masthead-avatar mb-5" src={AvatarImg} alt="..."/>
            <h1 className="masthead-heading text-uppercase mb-0">Welcome to the Resale Nation!</h1>
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fa-solid fa-sack-dollar"></i></div>
                <div className="divider-custom-line"></div>
            </div>

            <p className="masthead-subheading font-weight-light mb-0">
                <div className="divider-custom divider-light" style={{gap: "1rem"}}>
                    <a className={"mr-2"} href={"https://www.youtube.com/user/MassPickers"}>
                        <img src={YoutubeImg} className="img-fluid" alt="" height={100} width={100}/>
                    </a>
                    <div style={{width: '2.5rem'}} className="divider-custom-line"></div>
                    <a className={"ml-2 mr-2"} href={"https://www.instagram.com/resalenation1997/"}>
                        <img src={InstagramImg} className="img-fluid" alt="" height={100} width={100}/>
                    </a>
                    <div style={{width: '2.5rem'}} className="divider-custom-line"></div>
                    <a className={"ml-2"} href={"https://www.ebay.com/usr/resalenation"}>
                        <img src={EbayImg} className="img-fluid" alt="" height={100} width={100}/>
                    </a>
                </div>
            </p>
        </div>
    )
}

export default WelcomeSection
