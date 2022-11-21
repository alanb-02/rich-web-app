let noteNum = 0;
var add = document.getElementById("add");
/* const notes = JSON.parse(localStorage.getItem('notes')) 


if(notes) {  
  notes.forEach(note => addNewNote(note))  
} */


const addNewNote = {
  next: function() {

/*     console.log("hola"); */
    noteNum++;

    const note = document.createElement('div');
    note.setAttribute("id", "note-" + noteNum);
    note.setAttribute("class", "note");

    const toolbar = document.createElement('div');
    toolbar.setAttribute("class", "tools");
 
    const delBtn = document.createElement('button');
    delBtn.innerHTML = "Delete";
    delBtn.setAttribute("id", "note-" + noteNum);
    delBtn.setAttribute("class", "delete");
    delBtn.setAttribute("style", "background-color:red");
    toolbar.appendChild(delBtn)

    const edSaveBtn = document.createElement('button');
    edSaveBtn.innerHTML = "Save";
    edSaveBtn.setAttribute("id", "note-" + noteNum);
    edSaveBtn.setAttribute("class", "edit");
    edSaveBtn.setAttribute("style", "background-color:green");
    toolbar.appendChild(edSaveBtn)

    note.appendChild(toolbar);

    const textArea = document.createElement('textarea');
    textArea.readOnly = false;
    note.appendChild(textArea);

    var noteColourBtn = document.getElementById('colours');

    document.body.appendChild(note);

    textArea.style.backgroundColor = noteColourBtn.value;

    const deleteNote = {
      next: function(){
        document.getElementById(delBtn.getAttribute("id")).remove();
      }
    }
    var delObservable = Rx.Observable.fromEvent(delBtn, 'click');
    delObservable.subscribe(deleteNote);

    const edSaveNote = {
      next: function() {
        if (textArea.readOnly == false){
          textArea.readOnly = true;
          edSaveBtn.innerHTML = "Edit";
        }else {
          textArea.readOnly = false;
          edSaveBtn.innerHTML = "Save";
        }
        alert(textArea.value)
        /* textArea.readOnly = true; */
        note.appendChild(textArea);
      }
    }
    var edObservable = Rx.Observable.fromEvent(edSaveBtn, 'click');
    edObservable.subscribe(edSaveNote);
    

    return note.id;
  }
}

var addObservable = Rx.Observable.fromEvent(add, 'click');
addObservable.subscribe(addNewNote);


/* function updateLS() {  
  const notesText = document.querySelectorAll('textarea')  
  const notes = []  
  notesText.forEach(note => notes.push(note.value))  
  localStorage.setItem('notes', JSON.stringify(notes))  
}   */
