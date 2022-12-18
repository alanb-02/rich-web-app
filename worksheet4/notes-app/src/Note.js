import { useRef, useState, useEffect} from "react";
import React from "react";
import { ReactDOM } from "react";

function Note() {
    let counter = 0;
    const textnote = useRef(null);
    const colours = useRef(null);
    const[selColour, setColour] = useState('');
    const[selBg, setBg] = useState('')
    const [notes, setNotes] = useState(['','']);


    function Submit(e) {
        counter++;
        e.preventDefault();
        setNotes(current => [...current, textnote.current.value])
        console.log(colours.current.value)
        const colour = colours.current.value;
        setBg(colour)
    }


    function handleChange(e) {
        setColour(e.target.value);
    }


    const deleteNote = (index) => {
        console.log(index)
        setNotes((notes) => 
            notes.filter((_, i) => i !== index)
        );
    };

    
    return (
        <form onSubmit={Submit}>
            <select ref={colours} id="colours" value={selColour} onChange={handleChange}>
                <option value={'Green'}>Green</option>
            </select>
            <input ref={textnote} type="text" id="text-note"/>
            <button type='submit'>Create Note</button>
            <div>
                {notes.map((element,index) => {
                    return (
                        <div contentEditable={true} key={index}  id='note' style={{ backgroundColor: selBg}}>
                            {element}
                            <div >
                                <button onClick={() => deleteNote(index)}>Delete</button>  
                            </div>
                        </div> 
                    );
                })}
            </div>
        </form>
    );
}
  
 
  export default Note;