export default function RadialEdge(height, margin, child, color) {
    return(
        <div style={{width: "200%", height: height + "px", borderRadius: "50%", backgroundColor: color, marginTop: -margin + "px", marginLeft: "-50%", overflow: "hidden", position: "relative"}}>

            <div style={{width: "100%", height: "580px", background: "radial-gradient(#ffffff 50%, #d1d3ed )", position: "absolute", bottom: 0, zIndex: "10", overflow: "hidden"}}>
                {child}
            </div>
        </div>
    );

}