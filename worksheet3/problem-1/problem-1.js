let noteNum = 0;
var add = document.getElementById("add");


const addNewNote = {
  next: function() {

/*     console.log("hola"); */
    noteNum++;

    const note = document.createElement('div');
    note.setAttribute("id", "note-" + noteNum);
    note.setAttribute("class", "note");

    const toolbar = document.createElement('div');
    toolbar.setAttribute("class", "tools");
    toolbar.innerHTML =  `
      <button class="edit" style="background-color:green">Edit/Save</button>  
      <button class="delete" style="background-color:red">Delete</button>`;
    note.appendChild(toolbar);

    const notesText = document.createElement('textarea');
    note.appendChild(notesText);

    var noteColourBtn = document.getElementById('colours');
    const edSaveBtn = document.getElementsByClassName('edit');
    const delBtn = document.getElementsByClassName('delete'); 

    document.body.appendChild(note);

    notesText.style.backgroundColor = noteColourBtn.value;


/*     const changeColor = {
      next: function() {
        console.log("hola");
      }
    }
    var observableCol = Rx.Observable.fromEvent(noteColourBtn, 'click');
    observableCol.subscribe(changeColor); */


    return note.id;
  }
}

var addObservable = Rx.Observable.fromEvent(add, 'click');
addObservable.subscribe(addNewNote);