import React from "react";

const Note = (props) => {

    return(
        /* div will contain note text and the buttons associated with the note */
        <div>
            {/* div will contain note text */}
            <div style={{backgroundColor: props.text.color, width: "40%", height: "40px"}}>{props.text.noteText}</div>
            {/* edit button */}
            <input type={"button"} value={"Edit"} onClick= {() => {props.edit(props.text.id)}}></input>
            {/* delete button */}
            <input type={"button"} value={"Delete Note"} onClick= {() => {props.delete(props.text.id)}}></input>
            {/* changing colour button */}
            <input type={"button"} value={"blue"} onClick= {() => {props.changeColor(props.text.id, "rgb(103, 161, 227)")}}></input>
            <input type={"button"} value={"yellow"} onClick= {() => {props.changeColor(props.text.id, "rgb(244, 242, 122)")}}></input>
            <input type={"button"} value={"red"} onClick= {() => {props.changeColor(props.text.id, "rgb(248, 95, 95)")}}></input>
        </div>
    )
}


export default Note;