import React, { useState } from 'react';
import AbilitySection from '../../Components/Ability';
import {StandardLayout} from '../../Components/Layout/Layout';
import Footer from '../../Components/Footer';

export default function Veneficium() {return(StandardLayout(<VeneficiumLayout/>))}   

function VeneficiumLayout()
{
    return(
        <React.Fragment>
            <GameBanner/>
            <Spells/>
            <Narrative/>
            <KeyFeatures/>
       </React.Fragment>
    )
}

function GameBanner(){
    return (
        <div>
            <section style={{background: "url("+ process.env.PUBLIC_URL + "/assets/Veneficium-ActionShot.PNG" +")", width: "100%", height: "1080px", position: "relative", fontFamily: "Veneficium"}}>
                <div style={{height: "100%", width: "100%", backgroundColor: "rgb(70,70,70)", opacity: "0.4"}}/>

                <div style={{padding: "10px", fontSize: "30px", color: "white", backgroundImage: "linear-gradient(to right, #08d49d, #08bcd4)", textDecoration: "none", width: "300px", position: "absolute", right: 150, top: 150, textAlign: "center", borderRadius: "10px",}}> Download Game </div>

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
        <div>
            <section style={{width: "100%", height: "500px", position: "relative", fontFamily: "Veneficium", backgroundColor: "white", boxShadow: "inset 0px 0px 50px 10px rgb(150,150,150)", color: "#46474D"}}>
                <div className="container">
                    <div style={{paddingTop: "75px"}}>
                        <h1 style={{textAlign: "center", fontSize: 70}}>The Story</h1>
                        <h3 style={{textAlign: "center"}}>
                            In Veneficium, you play as a witch-in-training called Alice. Alice lives in a magical place called Diana's coven, and you will be making a trip with her through her homeplace.  At the start of the story, she will learn that the witches in her coven have all gone missing, and so the brave little witch decides it is her task to go look for them. Throughout her journey, she will encounter many troubled witches that she has to help. Not only this, but she also learns more and more about the cause of all of these terrible things. Will you help Alice on her journey to save the witches in her coven?
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
        <div style={{marginTop: 20}}>
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
            <section style={{width: "100%", height: "500px", position: "relative", fontFamily: "Veneficium", backgroundColor: "rgb(30,30,30)", boxShadow: "inset 0px 0px 50px 10px black", fontSize: "30px"}}>
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