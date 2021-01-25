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
                                        <Link to="/veneficium">
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
                            `The final version of Veneficium went live today! Check the link in our bio to download the game. We’ve implemented a whole new level and done a ton of fixes to improve your experience. Click the link below to download the game.
                            `,
                            `https://gamejolt.com/games/veneficium/569136
                            https://frostpetalstudio.itch.io/veneficium`



                        )}
                        {Note(
                            process.env.PUBLIC_URL + "/assets/GameIcon.png",
                            "'Veneficium' - Beta Release 11 January 2021",
                            "Date posted 09 dec 2020",
                            `The beta release for Veneficium just went live! Download the game on Itch.io And GameJolt`,
                            `Here’s the patch notes:
                             General - objects effected by an ice effect now indicate more clearly when it will end. 
                             Beanstalk - Fixed a bug where beanstalks effected by wind would not respawn after the player dies. Improvements 
                             The save system should now properly work.
                             Extra health pick-up now works as intended.
                             Walkable slopes - Traversing up a slope feels more natural, this is still work in progress.
                             Jumping on slopes - This has been made more accessible, this is still work in progress. 
                             Return to hub/main menu button added to pause screen.
                             Level 1 - witch village quest now respawns correctly. Environment Elder woods now guide you through the introduction level. Added in-game indicators for;
                             Quest pick-up
                             Quest delivery
                             Level completion
                             Reasons for death 
                             Ability guidance Controller Tweaked controller support, this is still work in progress. Let us know what you guys think about the new patch!
                             `
                        )}
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: "linear-gradient(to right, #08d49d, #08bcd4)", height: 20}}/>
        </div>
    );
}

export default function Home() {return(Layout(HomeLayout()))}

