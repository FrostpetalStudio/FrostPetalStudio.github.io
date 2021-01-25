import React from 'react';
import useCollapse from 'react-collapsed';

export default function Note(imageSrc, Title, postDate, IntroText, postText, image, Link) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return(
        <div style={{width: "100%", borderRadius: "10px", border: "1px solid #46474D", marginTop: "20px", padding: "30px"}}>
            <div style={{display: "flex"}}>
                <div style={{width: "50px"}}>
                    <img src={imageSrc} style={{height: "140px", borderRadius: 10}}/>
                </div>
                <div style={{marginLeft: "150px"}}>
                    <h4 style={{fontWeight: "bold", margin: 0}}>{Title}</h4>
                    <h5>{postDate}</h5>
                    <p>{IntroText}</p>
                    <div {...getToggleProps()} style={{padding: "7px", fontSize: "15px", color: "white", backgroundImage: "linear-gradient(to right, #08d49d, #08bcd4)", textDecoration: "none", width: "150px", textAlign: "center", borderRadius: "10px"}}> Read more </div>
                    <section {...getCollapseProps()}>
                        <p  style={{ marginTop: "20px"}}>
                            {postText}
                        </p>
                        <div>
                            <img src={image} style={{width: "80%", height: "auto", borderRadius: 10}} />
                        </div>
                        <a href={Link}> {Link} </a>
                    </section>     
                </div>
            </div>
        </div>
    );
}