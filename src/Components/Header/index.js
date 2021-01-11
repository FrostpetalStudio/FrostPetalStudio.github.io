export default function Header()
{
    return(
        <div className="row justify-content-center" style={{color: "#40677E", paddingTop: "20px"}}>
            <div style={{paddingLeft: "50px", paddingRight: "50px"}}>
                <h3 style={{ fontWeight: "bold"}}>Home</h3>
            </div>
            <div style={{paddingLeft: "50px", paddingRight: "50px"}}>
                <h3 style={{ fontWeight: "bold"}}>Games</h3>
            </div>
            <div style={{paddingLeft: "50px", paddingRight: "50px"}}>
                <h3 style={{ fontWeight: "bold"}}>About us</h3>
            </div>
        </div>
    );
}