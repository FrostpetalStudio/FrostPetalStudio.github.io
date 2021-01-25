import React, { useState } from 'react';
import AbilitySection from '../../Components/Ability';
import {StandardLayout} from '../../Components/Layout/Layout';
import Footer from '../../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faItchIo, faSteam } from '@fortawesome/free-brands-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

export default function Veneficium() {return(StandardLayout(<VeneficiumLayout/>))}   

function VeneficiumLayout()
{
    return(
        <div>
            <GameBanner/>
            <Narrative/>
            <Spells/>
            <KeyFeatures/>
            <Download/>
            <Footer/>
       </div>
    )
}

function GameBanner(){
    return (
        <div>
            <section style={{background: "url("+ process.env.PUBLIC_URL + "/assets/Veneficium-ActionShot.PNG" +")", width: "100%", height: "1080px", position: "relative", fontFamily: "Veneficium"}}>
                <div style={{height: "100%", width: "100%", backgroundColor: "rgb(70,70,70)", opacity: "0.4"}}/>

                <div style={{cursor: "pointer", padding: "10px", fontSize: "30px", color: "white", backgroundImage: "linear-gradient(to right, #08d49d, #08bcd4)", textDecoration: "none", width: "300px", position: "absolute", right: 150, top: 150, textAlign: "center", borderRadius: "10px"}} onClick={() => document.getElementById("downloads").scrollIntoView({ behavior: "smooth" })}> Download Game </div>

                <h1 style={{position: "absolute", bottom: 500, width: "100%", textAlign: "center", fontSize: 150}}>Veneficium</h1>
                <h1 style={{position: "absolute", bottom: 470, width: "100%", textAlign: "center", fontSize: 50}}>Explore a world of magic with Alice!</h1>
                
                <h1 style={{position: "absolute", bottom: 400, width: "100%", textAlign: "center", fontSize: 35}}><span style={{backgroundImage: "linear-gradient(#08d49d, #08bcd4)", padding: "10px", paddingLeft: "30px", paddingRight: "30px", borderRadius: "10px"}}>
                    Beta Release Now Online!
                </span></h1>


                <div style={{backgroundImage: "linear-gradient(to right, #08d49d, #08bcd4)", height: 20}}/>
            </section>
        </div>
    );
}

function Narrative() {
    return (
        <div style={{marginTop: 20}}>
            <section style={{width: "100%", height: "500px", position: "relative", fontFamily: "Veneficium", backgroundColor: "white", boxShadow: "inset 0px 0px 50px 10px rgb(150,150,150)", color: "#46474D"}}>
                <div className="container">
                    <div style={{paddingTop: "75px"}}>
                        <h1 style={{textAlign: "center", fontSize: 70}}>The Story</h1>
                        <h3 style={{textAlign: "center"}}>
                        In Veneficium, you play as a witch-in-training called Alice. Alice has to use her ice, fire and storm ability to platform around the world. Use your abilities to manipulate your environment and solve unique and fun puzzles on your way. Throughout her journey, Alice encounters many troubled witches that are in dire need of help. During the game, you will collect items for curing potions, find hidden witches within the levels, and use your spells to destroy dangerous Floating Crystals and Chaos Orbs that block your path! The simple, yet endearing and vibrant environment in Veneficium is definitely worth taking a look at. The aesthetics in our game may even take you back to the old days of Sonic the Hedgehog and the level design will remind you of Banjo-Kazooie. Will you help Alice on her journey to save the witches in her coven?
                        </h3>
                    </div>
                </div>
            </section>
            <div style={{backgroundImage: "linear-gradient(to right, #08d49d, #08bcd4)", height: 20}}/>
        </div>
    );
}

function Spells() {
    return (
        <div>
            <section style={{width: "100%", height: "500px", position: "relative", fontFamily: "Veneficium", backgroundColor: "rgb(30,30,30)", boxShadow: "inset 0px 0px 50px 10px black"}}>
                <div className="container">
                    <div className="row">
                        <AbilitySection image="Ability_Fire_Big" name="Pyromancy" text={
                            "Burn down plants and evaporate water and clouds"
                        }/>
                        <AbilitySection image="Ability_Ice_Big" name="Cryomancy" text={
                            "Freeze clouds, plants and water to create walkable surfaces"
                        }/>
                        <AbilitySection image="Ability_Storm_Big" name="Aeromancy" text={
                            "Blow over plants to create bridges and create tornados/waterspout"
                        }/>
                    </div>
                </div>
            </section>
            <div style={{backgroundImage: "linear-gradient(to right, #08d49d, #08bcd4)", height: 20}}/>
        </div>
    );
}

function KeyFeatures() {
    return (
        <div>
            <section style={{color: "#46474D", width: "100%", height: "500px", position: "relative", fontFamily: "Veneficium", backgroundColor: "white", boxShadow: "inset 0px 0px 50px 10px rgb(150,150,150)", fontSize: "30px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <img src="https://cdn.discordapp.com/attachments/763687401318383616/786933803310252093/Alice_Render_Solo.png" style={{width: "80%"}} />
                        </div>
                        <div className="col-8">
                            <h1 style={{textAlign: "left", fontSize: 70, paddingTop: "75px"}}>Core Gameplay</h1>
                            <ul>
                                <li>In Veneficium, you are a witch-in-training who has to use their Ice, Fire and Storm ability to platform around the world.</li>
                                <li>The ability to choose and create your own path leads to very unique and fun gameplay.</li>
                                <li>Manouvre your way around the magical and vibrant world.</li>
                            </ul>
                        </div>      
                    </div>
                </div>
            </section>
            <div style={{backgroundImage: "linear-gradient(to right, #08d49d, #08bcd4)", height: 20}}/>
        </div>
    );
}

function Download() {
    return (
        <div>
            <section id="downloads" style={{width: "100%", height: "500px", position: "relative", fontFamily: "Veneficium", backgroundColor: "rgb(30,30,30)", boxShadow: "inset 0px 0px 50px 10px black", padding: 60}}>
                <div className="container">
                    <div>
                        <h1 style={{textAlign: "center"}}>Download Game</h1>
                        <div style={{textAlign: "center", listStyle: "none", fontSize: 20}}>
                            <p style={{padding: 0, margin: 0}}>Version: 1.1</p>
                            <p style={{padding: 0, margin: 0}}>Size: 200 MB</p>
                            <p style={{padding: 0, margin: 0}}>Last Update: 13 January 2021 MB</p>
                        </div>
                    </div>
                    <div className="row justify-content-center" style={{fontSize: "120px", padding: 10, textAlign: "center"}}>
                        <div className="col-4">
                            <FontAwesomeIcon icon={faItchIo}/>
                            <div className="row justify-content-center">
                                <a href="https://frostpetalstudio.itch.io/veneficium" style={{padding: "10px", fontSize: "25px", color: "white", backgroundImage: "linear-gradient(to right, #08d49d, #08bcd4)", textDecoration: "none", width: "200px",  textAlign: "center", borderRadius: "10px"}}> 
                                    Itch.io Download 
                                </a>
                            </div>
                        </div>
                        <div className="col-4">
                            <FontAwesomeIcon icon={faSteam}/>
                            <div className="row justify-content-center">
                                <button disabled style={{opacity: 0.5, padding: "10px", fontSize: "25px", color: "white", backgroundImage: "linear-gradient(to right, #08d49d, #08bcd4)", textDecoration: "none", width: "200px",  textAlign: "center", borderRadius: "10px"}}> 
                                    Steam Download 
                                </button>
                            </div>
                        </div>
                        <div className="col-4">
                            <FontAwesomeIcon icon={faBolt}/>
                            <div className="row justify-content-center">
                                <a href="https://gamejolt.com/games/veneficium/569136" style={{padding: "10px", fontSize: "25px", color: "white", backgroundImage: "linear-gradient(to right, #08d49d, #08bcd4)", textDecoration: "none", width: "200px",  textAlign: "center", borderRadius: "10px"}}> 
                                    Jolt Download 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div style={{backgroundImage: "linear-gradient(to right, #08d49d, #08bcd4)", height: 20}}/>
        </div>
    )
}