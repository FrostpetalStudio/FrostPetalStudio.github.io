import React, { useState } from "react";
import { StandardLayout } from "../../Components/Layout/Layout";
import "../../assets/Styling/main.css";

function AboutUsLayout() {
  return (
    <div>
      <React.Fragment>
        <Header />
        <TheTeam />
        <TeamPics />
        <Footer />
      </React.Fragment>
    </div>
  );
}

function Header() {
  return (
    <section
      style={{
        background:
          "url(" +
          process.env.PUBLIC_URL +
          "/assets/Veneficium-ActionShot.PNG" +
          ")",
        width: "100%",
        height: "470px",
        position: "relative",
        fontFamily: "Veneficium",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "rgb(70,70,70)",
          opacity: "0.4",
        }}
      />
      <div
        style={{
          backgroundImage: "linear-gradient(to right, #08d49d, #08bcd4)",
          height: 20,
        }}
      />
    </section>
  );
}

function TheTeam() {
  return (
    <div style={{ marginTop: 20 }}>
      <section
        style={{
          width: "100%",
          height: "420px",
          position: "relative",
          fontFamily: "Veneficium",
          backgroundColor: "rgb(30,30,30)",
          boxShadow: "inset 0px 0px 50px 10px black",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ flexBasis: "100px", marginRight: "50px" }}>
            <img src={process.env.PUBLIC_URL + "/assets/logo.png"} />
          </div>
          <div style={{ flexBasis: "500px" }}>
            <p>
              In Veneficium, you play as a witch-in-training called Alice. Alice
              lives in a magical place called Diana's coven, and you will be
              making a trip with her through her homeplace. At the start of the
              story, she will learn that the witches in her coven have all gone
              missing, and so the brave little witch decides it is her task to
              go look for them. Throughout her journey, she will encounter many
              troubled witches that she has to help. Not only this, but she also
              learns more and more about the cause of all of these terrible
              things. Will you help Alice on her journey to save the witches in
              her coven?
            </p>
          </div>
        </div>
      </section>
      <div
        style={{
          backgroundImage: "linear-gradient(to right, #08d49d, #08bcd4)",
          height: 20,
        }}
      />
    </div>
  );
}

function TeamPics() {
  return (
    <div>
      <section
        style={{
          width: "100%",
          height: "600px",
          position: "relative",
          fontFamily: "Veneficium",
          backgroundColor: "white",
          boxShadow: "inset 0px 0px 50px 10px rgb(150,150,150)",
          color: "#46474D",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ paddingTop: "75px" }}>
            <h1 style={{ textAlign: "center", fontSize: 70 }}>The Team</h1>
            <div>
              <div style={{ flexBasis: "500px" }}>



              <div id="cards" className="row justify-content-center" style={{maxWidth: "100%"}} >  
                <figure class="card card--water" style={{display: "flex" }}>
                  <div class="card__image-container">
                    <img
                      src="https://cdn.bulbagarden.net/upload/thumb/f/fd/134Vaporeon.png/1200px-134Vaporeon.png"
                      alt="Vaporeon"
                      class="card__image"
                      style={{ 
                        maxHeight: "150px",
                        margin: "auto",
                        display: "inline-block"
                        }}
                    />
                  </div>

                  <figcaption class="card__caption">
                    <h1 class="card__name">Vaporeon</h1>

                    <h3 class="card__type">water</h3>

                    <table class="card__stats">
                      <tbody>
                        <tr>
                          <th>HP</th>
                          <td>130</td>
                        </tr>
                        <tr>
                          <th>Attack</th>
                          <td>65</td>
                        </tr>

                        <tr>
                          <th>Defense</th>
                          <td>60</td>
                        </tr>

                        <tr>
                          <th>Special Attack</th>
                          <td>110</td>
                        </tr>
                        <tr>
                          <th>Special Defense</th>
                          <td>95</td>
                        </tr>
                        <tr>
                          <th>Speed</th>
                          <td>65</td>
                        </tr>
                      </tbody>
                    </table>

                    <div class="card__abilities">
                      <h4 class="card__ability">
                        <span class="card__label">Ability</span>
                        Absorb
                      </h4>
                      <h4 class="card__ability">
                        <span class="card__label">Hidden Ability</span>
                        Hydration
                      </h4>
                    </div>
                  </figcaption>
                </figure>               

                </div>


              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        style={{
          backgroundImage: "linear-gradient(to right, #08d49d, #08bcd4)",
          height: 20,
        }}
      />
    </div>
  );
}

function Footer() {
  return <div>Dit is de footer</div>;
}

export default function AboutUs() {
  return StandardLayout(AboutUsLayout());
}
