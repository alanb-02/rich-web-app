import { useRef, useState, useEffect} from "react";
import React from "react";
import { ReactDOM } from "react";

/* function adds, update, adn deletes notes */
/* And changes the note colour */
function Note() {
    const textnote = useRef(null);
    const colours = useRef(null);
    const[selColour, setColour] = useState('');
    const[selBg, setBg] = useState('')
    const [notes, setNotes] = useState(['','']);


    /* function that adds note when creat note button is clicked */
    function create(e) {
        e.preventDefault();
        setNotes(current => [...current, textnote.current.value])
        console.log(colours.current.value)
        const colour = colours.current.value;
        setBg(colour)
    }


    /* handles change of note colour */
    function handleChange(e) {
        setColour(e.target.value);
    }


    /* function taht remves the note user wants to delete */
    const deleteNote = (index) => {
        console.log(index)
        setNotes((notes) => 
            notes.filter((_, i) => i !== index)
        );
    };

    
    /* the html render for teh user input and teh notes that are added */
    return (
        <form onSubmit={create}>
            <label>Select note colour: </label>
            <select ref={colours} id="colours" value={selColour} onChange={handleChange}>
                <option value={'rgb(135, 197, 144)'} id="green"></option>
                <option value={'rgb(255, 106, 106)'} id="red"></option>
                <option value={'#3a54da'} id="blue"></option>
            </select>
            <input ref={textnote} type="text" id="text-note"/>
            <button type='submit'>Create Note</button>
            <div>
                {notes.map((element,index) => {
                    return (
                        <div contentEditable={true} key={index}  id='note' style={{ backgroundColor: selBg}}>
                            {element}
                            <div >
                                <button id = "delBtn" onClick={() => deleteNote(index)}>X</button>  
                            </div>
                        </div> 
                    );
                })}
            </div>
        </form>
    );
}
  
 
  export default Note;