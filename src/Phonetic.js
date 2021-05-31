import React from "react";

export default function Phonetic(props){
    console.log(props.phonetics)
    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} rel="noreferrer" target="_blank" >
                Listen
            </a>
            <br></br>
            {props.phonetic.text}
        </div>
    )
}