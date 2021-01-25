import React, { useState } from 'react';
import Layout from '../../Components/Layout/Layout';
import Note from '../../Components/Note';
import {Link} from 'react-router-dom'
import Footer from "../../Components/Footer";
import '../../assets/Styling/main.css';

var fontFamily = {
    fontFamily: "Candara,Calibri,Segoe,Segoe UI,Optima,Arial,sans-serif"
}

function HomeLayout()
{
    return(
        <div>
            <WhoWeAreSection/>
            <OurGames/>
            <RecentNews/>
            <Footer/>
        </div>
    )
}

function WhoWeAreSection()
{
    return (
        <div style={{backgroundColor: "rgb(30,30,30)"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8" style={{padding: "100px"}}>
                        <h4 style={{textAlign: "center", width: "100%", fontWeight: "lighter", margin: "0"}}>A little about</h4>
                        <h1 style={{textAlign: "center", width: "100%"}}>What we do</h1>
                        <p style={{textAlign: "center", width: "100%"}}>We are a small group of starting indie game developers. We started developing games past september. This has led to an amazing journey of meeting and working with awesome people. We were new to this process and we are happy to learn and keep improving our games for you guys!  </p>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: "linear-gradient(to right, #08d49d, #08bcd4)", height: 20}}/>
        </div>
    );
}

function OurGames()
{
    return(
        <div style={{backgroundColor: "white", boxShadow: "inset 0px 0px 50px 10px rgb(150,150,150)"}}>
            <div className="container">
                <div className="row justify-content-center" style={{...fontFamily, color: "#46474D"}}>
                        <div className="col-12" style={{padding: "20px"}}>
                            <h1 style={{textAlign: "center", width: "100%"}}>Our Games</h1>
                            <div style={{width: "100%", position: "relative"}}>
                                <img src={process.env.PUBLIC_URL + "/assets/Veneficium_envioronment.PNG"} style={{width: "100%", height: "auto"}}/>
                                <div style={{position: "absolute", left: "0", bottom: "20px", height: "60%", backgroundColor: "rgb(30,30,30)", width: "70%"}}>
                                    <img style={{width: "auto", height: "200%", marginTop: "-35%", marginLeft: "-50px"}} src="https://cdn.discordapp.com/attachments/763687401318383616/786933803310252093/Alice_Render_Solo.png"/>
                                    <div style={{textAlign: "right", width: "64%", position: "absolute", right: 30, top: 0, color: "white", fontSize: "30px", paddingTop: 60}}>
                                        Join Alice on her quest to save poisoned witches in her coven! In this single player platformer
                                        <Link to="/Games">
                                            <div style={{padding: "10px", fontSize: "20px", color: "white", backgroundImage: "linear-gradient(to right, #08d49d, #08bcd4)", textDecoration: "none", width: "200px", position: "absolute", right: 0, bottom: -80, textAlign: "center", borderRadius: "10px"}}> Go To Game </div>
                                        </Link>
                                    </div>
                                </div>
                                <h1 style={{position: "absolute", top: 0, right: 0, padding: "20px", fontSize: "80px", color: "rgba(255, 255, 255, 0.8)", letterSpacing: 7}}>
                                    Veneficium
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            <div style={{backgroundImage: "linear-gradient(to right, #08d49d, #08bcd4)", height: 20}}/>
        </div>
    );
}


function RecentNews()
{
    return(
        <div style={{backgroundColor: "white", boxShadow: "inset 0px 0px 50px 10px rgb(150,150,150)"}}>
            <div className="container">
                <div className="row justify-content-center" style={{...fontFamily, color: "#46474D"}}>
                    <div className="col-12" style={{padding: "100px"}}>
                        <h1 style={{textAlign: "center", width: "100%"}}>Recent news</h1>
                        {Note(
                            process.env.PUBLIC_URL + "/assets/Social_Image_1.png",
                            "HR Minor Game Showcase",
                            "Date posted 22 jan 2021",
                            "Upcomming Thueday we will display our game at the Game Minor Showcase. In this showcase all groups of students will present there games an show some gameplay",
                            "",
                            process.env.PUBLIC_URL + "/assets/Social_Image_2.png"
                        )}
                        {Note(
                            process.env.PUBLIC_URL + "/assets/BigUpdatePost.png",
                            "'Veneficium' - Official Release 25 January 2021",
                            "Date posted 11 jan 2021",
                            "In Veneficium, you play as a witch-in-training called Alice. Alice has to use her ice, fire and storm ability to platform around the world. Use your abilities to manipulate your environment and solve unique and fun puzzles on your way. Throughout her journey, Alice encounters many troubled witches that are in dire need of help. During the game, you will collect items for curing potions, find hidden witches within the levels, and use your spells to destroy dangerous Elemental Miasmas and Chaos Orbs that block your path! The simple, yet endearing and vibrant environment in Veneficium is definitely worth taking a look at. The aesthetics in our game may even take you back to the old days of Sonic the Hedgehog and the level design will remind you of Banjo-Kazooie. Will you help Alice on her journey to save the witches in her coven?",
                            "The beta release for Veneficium just went live! Download the game here:"+ <br/> + "https://gamejolt.com/games/veneficium/569136" + <br/> + "https://frostpetalstudio.itch.io/veneficium"



                        )}
                        {Note(
                            process.env.PUBLIC_URL + "/assets/GameIcon.png",
                            "'Veneficium' - Beta Release 11 January 2021",
                            "Date posted 09 dec 2020",
                            "Join Alice on her quest to save poisoned witches in her coven! In this single player platformer, you can manipulate your environment by using spells to traverse beautiful floating islands. Collect the necessary ingredients to make potions and save your coven!"
                        )}
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: "linear-gradient(to right, #08d49d, #08bcd4)", height: 20}}/>
        </div>
    );
}

export default function Home() {return(Layout(HomeLayout()))}

