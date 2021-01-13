import '../../assets/Styling/footer.css';

export default function Footer()
{
    return(
        <div style={{backgroundColor: "rgba(30, 30, 30, 1)", boxShadow: "inset 0px 0px 50px 10px black", height:" 450px", color: "white", position: "relative"}}>
            <div style={{display: "flex", padding: "5%", justifyContent: "center"}}  className="footer__nav">
                <section className="footer__col footer__col--intro">
                    <img className="footer__img" src={process.env.PUBLIC_URL + '/assets/logo.png'}/>
                </section>
                <section className="footer__col">
                    <div className="footer__col--wrap">
                        <h3 className="footer__title">Explore</h3>
                        <div className="footer__col--list">
                            <a className="footer__link" href="/">Home</a>
                            <a className="footer__link" href="/veneficium">Veneficium</a>
                            <a className="footer__link" href="/aboutus">About Us</a>
                        </div>
                    </div>
                </section>
                <section className="footer__col">
                    <div className="footer__col--wrap">
                        <h3 className="footer__title">Socials</h3>
                        <div className="footer__col--list">
                            <a className="footer__link" href="https://gamejolt.com/games/veneficium/569136">Game Jolt</a>
                            <a className="footer__link" href="https://frostpetalstudio.itch.io/veneficium">Itch.IO</a>
                            <a className="footer__link" href="https://www.tiktok.com/@veneficium_game?_d=secCgsIARCbDRgBIAMoARI%2BCjySd%2BewNhlK8ZBZJHh%2B6T0Xas2zYKTXSRjpkX2Yk22ol5aDVS5g2r9oEXFNBnYumRccPEkRRRhTwGhZW1waAA%3D%3D&language=nl&sec_uid=MS4wLjABAAAAa9pF8CH6ncQEgiwS2LljSinAwrqzg8Kpf56e-L_m_b9uZbFgw8gy1pCzU7z8M0hT&sec_user_id=MS4wLjABAAAAa9pF8CH6ncQEgiwS2LljSinAwrqzg8Kpf56e-L_m_b9uZbFgw8gy1pCzU7z8M0hT&share_app_name=musically&share_author_id=6841890574070121478&share_link_id=95287eb1-9e3e-488a-95a4-46553fc43ff8&timestamp=1608154199&u_code=dd4h6id5681jl6&user_id=6841890574070121478&utm_campaign=client_share&utm_medium=android&utm_source=copy&source=h5_m">TikTok</a>
                            <a className="footer__link" href="https://discord.com/invite/W6CSsyY">Discord</a>
                            <a className="footer__link" href="https://www.reddit.com/r/FrostPetalStudios/">Reddit</a>
                            <a className="footer__link" href="https://www.twitch.tv/frostpetalstudio">Twitch</a>
                            <a className="footer__link" href="https://www.instagram.com/veneficium_game/">Instagram</a>
                            <a className="footer__link" href="https://twitter.com/veneficium_game">Twitter</a>
                        </div>
                    </div>
                </section>
                <section className="footer__col">
                    <div className="footer__col--wrap">
                        <h3 className="footer__title">Contact us</h3>
                        <div className="footer__col--list">
                            <p>Email:<br/> <a className="footer__link" href="frostpetalstudios@gmail.com">frostpetalstudios@gmail.com</a></p>
                            <p>Or by joining our Discord <br/> <a className="footer__link" href="https://discord.com/invite/W6CSsyY">Discord</a></p>
                            
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}