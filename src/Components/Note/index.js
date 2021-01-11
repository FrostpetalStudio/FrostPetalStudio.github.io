export default function Note(imageSrc, Title, postDate, Text) {
    return(
        <div style={{width: "100%", height: "230px", borderRadius: "10px", border: "1px solid #46474D", marginTop: "20px", padding: "30px"}}>
            <div style={{display: "flex"}}>
                <div>
                    <img src={imageSrc} style={{width: "60%", height: "auto", borderRadius: 10}}/>
                </div>
                <div style={{marginLeft: "-30px"}}>
                    <h4 style={{fontWeight: "bold", margin: 0}}>{Title}</h4>
                    <h5>{postDate}</h5>
                    <p>{Text}</p>
                    <p className="text-primary" style={{fontWeight: "bold"}}>{"Read more ->"}</p>
                </div>
            </div>
        </div>
    );
}