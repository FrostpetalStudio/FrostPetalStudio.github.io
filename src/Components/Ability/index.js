
export default function AbilitySection(props)
{
    return(
        <div className="col-4">
            <div className="row justify-content-center">
                <img style={{width: "40%", marginTop: "80px"}} src={process.env.PUBLIC_URL + "/assets/" + props.image + ".png"}/>
            </div>
            <h1 style={{marginTop: "30px", width: "100%", textAlign: "center"}} >{props.name}</h1>
            <h4 style={{width: "100%", textAlign: "center"}}>{props.text}</h4>
        </div>
    );
}