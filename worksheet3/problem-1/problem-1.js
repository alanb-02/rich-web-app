let noteNum = 0;
var add = document.getElementById("add");


const addNewNote = {
    next: function() {

        console.log("hola");
        noteNum++;
        let note = document.createElement('div');
        note.setAttribute("id", "note-" + noteNum);

        const notesText = document.createElement("textarea");
        note.appendChild(notesText);

        document.body.appendChild(note);




        return note.id;
    }
}

var addObservable = Rx.Observable.fromEvent(add, 'click');
addObservable.subscribe(addNewNote);