import React from "react"

export default function Die(props) {
const faceStyles = {
        backgroundColor: props.isHeld ? "#6A35FF" : "rgba(106, 53, 255, 0.2)",
        boxShadow: props.isHeld ? "0px 3px 15px rgba(106, 53, 255, 0.8)" : "0px 0px 10px rgba(106, 53, 255, 0.5)"
    }
    const numberStyles = {
        color: props.isHeld ? "#fff" : "#6A35FF"
}
    return (
        <div 
            className="die-face" 
            style={faceStyles}
            onClick={props.holdDice}
        >
            <h2 style={numberStyles} className="die-num">{props.value}</h2>
        </div>
    )
}
