import { useRef, useState, useEffect} from "react";
import React from "react";
import { ReactDOM } from "react";

function Note() {
    let counter = 0;
    const textnote = useRef(null);
    const [notes, setNotes] = useState(['','']);


    function Submit(e) {
        counter++;
        e.preventDefault();
        setNotes(current => [...current, textnote.current.value])
    }



    const deleteNote = (index) => {
        console.log(index)
        setNotes((notes) => 
            notes.filter((_, i) => i !== index)
        );
    };

    

    return (
        <form onSubmit={Submit}>
            <input ref={textnote} type="text" id="text-note"/>
            <button type='submit'>Add Note</button>
            <div>
                {notes.map((element,index) => {
                    return (
                        <div contentEditable={true} key={index}  id='note'>
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