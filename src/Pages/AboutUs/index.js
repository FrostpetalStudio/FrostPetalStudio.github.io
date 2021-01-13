import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faItchIo, faTiktok, faInstagram, faGithub, faDiscord, faTwitch, faReddit, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { StandardLayout } from "../../Components/Layout/Layout";
import "../../assets/Styling/main.css";
import data from "../../assets/json/Team.json"
import Card from "../../Components/Card";
import Footer from '../../Components/Footer'

function AboutUsLayout() {
  return (
  	<div>
        <React.Fragment>
            <Header />
            <Aboutus />
            <TeamPics />
            <Footer />
        </React.Fragment>
    </div>
  );
}

function Header() {
    return (
        <section
            style={{background: "url(" + process.env.PUBLIC_URL + "/assets/Veneficium-ActionShot.PNG" + ")",width: "100%", height: "470px", position: "relative", fontFamily: "Veneficium"}}>
            <div style={{height: "100%",width: "100%", backgroundColor: "rgb(70,70,70)",opacity: "0.4"}}/>
            <div style={{backgroundImage: "linear-gradient(to right, #08d49d, #08bcd4)", height: 20}}/>
        </section>
    );
}

function Aboutus() {
  return (
    <div style={{ marginTop: 20 }}>
        <section style={{width: "100%", position: "relative", fontFamily: "Veneficium", backgroundColor: "rgb(30,30,30)", boxShadow: "inset 0px 0px 50px 10px black", padding: "30px"}}>
            <div className="container"style={{padding: "10px"}}>
                <h1 style={{textAlign: "center", fontSize: "70px"}}>About Us</h1>
                <p style={{padding: "10px",fontSize: "20px", textAlign: "center"}}>
                First of all, we would like to thank you for checking out our game! We are Frostpetal Studio,  a group of 15 students working on this game for a university project. All of us are very invested to bring you a great game, and hope you have fun playing it. We hope you stick with us as we work on Veneficium (and maybe other projects too, in the future!)
                If you are interested in following our team more closely, check out our other socials too!
                </p>
            </div>
            <div className="container" style={{paddingBottom: "50px", textAlign: "center"}}>
                <h1 style={{textAlign: "center", fontSize: "50px", marginBottom: "60px"}}>Our socials</h1>
                <a href="https://www.tiktok.com/@veneficium_game?_d=secCgsIARCbDRgBIAMoARI%2BCjySd%2BewNhlK8ZBZJHh%2B6T0Xas2zYKTXSRjpkX2Yk22ol5aDVS5g2r9oEXFNBnYumRccPEkRRRhTwGhZW1waAA%3D%3D&language=nl&sec_uid=MS4wLjABAAAAa9pF8CH6ncQEgiwS2LljSinAwrqzg8Kpf56e-L_m_b9uZbFgw8gy1pCzU7z8M0hT&sec_user_id=MS4wLjABAAAAa9pF8CH6ncQEgiwS2LljSinAwrqzg8Kpf56e-L_m_b9uZbFgw8gy1pCzU7z8M0hT&share_app_name=musically&share_author_id=6841890574070121478&share_link_id=95287eb1-9e3e-488a-95a4-46553fc43ff8&timestamp=1608154199&u_code=dd4h6id5681jl6&user_id=6841890574070121478&utm_campaign=client_share&utm_medium=android&utm_source=copy&source=h5_m" class="fa fa-github"><FontAwesomeIcon icon={faTiktok}/></a>
                <a href="https://twitter.com/veneficium_game" class="fa fa-github"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://www.reddit.com/r/FrostPetalStudios/" class="fa fa-github"><FontAwesomeIcon icon={faReddit} /></a>
                <a href="https://frostpetalstudio.itch.io/veneficium" class="fa fa-github"><FontAwesomeIcon icon={faItchIo}/></a>
                <a href="https://www.twitch.tv/frostpetalstudio" class="fa fa-github"><FontAwesomeIcon icon={faTwitch}/></a>
                <a href="https://discord.com/invite/W6CSsyY" class="fa fa-github"><FontAwesomeIcon icon={faDiscord}/></a>
                <a href="https://www.instagram.com/veneficium_game/" class="fa fa-github"><FontAwesomeIcon icon={faInstagram}/></a>
            </div>
        </section>
        <div style={{backgroundImage: "linear-gradient(to right, #08d49d, #08bcd4)", height: 20}}/>
        
    </div>
  );
}

function TeamPics() {
  return (
    <div>
      <section style={{width: "100%", position: "relative", fontFamily: "Veneficium", backgroundColor: "white", boxShadow: "inset 0px 0px 50px 10px rgb(150,150,150)", color: "#46474D"}}>
        <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
          <div style={{ paddingTop: "75px" }}>
            <h1 style={{ textAlign: "center", fontSize: 70 }}>The Team</h1>
            <div>
              <div style={{ flexBasis: "500px" }}>
                <div style={{backgroundImage: "linear-gradient(to right, #08d49d, #08bcd4)",height: 5}}/>
                <h1 style={{textAlign: "center"}}>Producer</h1>
                <div id="cards" className="row justify-content-center" style={{maxWidth: "100%"}} >  
                    {data.map((d, i) => i === 0 ? Card(d) : null)}
                </div>
                <div style={{backgroundImage: "linear-gradient(to right, #08d49d, #08bcd4)",height: 5}}/>
                <h1 style={{textAlign: "center"}}>Designers</h1>
                <div id="cards" className="row justify-content-center" style={{maxWidth: "100%"}} >  
                    {data.map((d, i) => i >= 1  && i <= 3 ? Card(d) : null)}
                </div>
                <div style={{backgroundImage: "linear-gradient(to right, #08d49d, #08bcd4)",height: 5}}/>
                <h1 style={{textAlign: "center"}}>Artists</h1>
                <div id="cards" className="row justify-content-center" style={{maxWidth: "100%"}} >  
                    {data.map((d, i) => i >= 4  && i <= 8 ? Card(d) : null)}
                </div>
                <div style={{backgroundImage: "linear-gradient(to right, #08d49d, #08bcd4)",height: 5}}/>
                <h1 style={{textAlign: "center"}}>Developers</h1>
                <div id="cards" className="row justify-content-center" style={{maxWidth: "100%"}} >  
                    {data.map((d, i) => i >= 9  && i <= 15 ? Card(d) : null)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{backgroundImage: "linear-gradient(to right, #08d49d, #08bcd4)", height: 20}}/>
    </div>
  );
}

export default function AboutUs() {
  return StandardLayout(AboutUsLayout());
}
