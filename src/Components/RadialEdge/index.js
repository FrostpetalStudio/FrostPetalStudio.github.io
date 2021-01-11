var style = (height, margin, color) => { return {width: "200%", height: height + "px", borderRadius: "50%", backgroundColor: color, marginTop: -margin + "px", marginLeft: "-50%", overflow: "hidden", position: "relative"}}

export default function RadialEdge(height, margin, child, color, hasShadow) {
    return(
        <div style={ hasShadow ? {...style(height, margin, color),  boxShadow: "0px 2px 10px 2px rgba(0,0,0,0.5)"} : style(height, margin, color)}>

            <div style={{width: "100%", height: "580px", backgroundColor: "white", position: "absolute", bottom: 0, zIndex: "10", overflow: "hidden"}}>
                {child}
            </div>
        </div>
    );
}