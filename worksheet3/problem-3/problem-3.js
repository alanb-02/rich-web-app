let noteNum = 0;
let subNoteNum = 0;
var add = document.getElementById("add");
var mainList = document.getElementById("main-list");


const addNewNote = {
  next: function() {
    noteNum++;

    const mainListLine = document.createElement('LI');
    mainListLine.setAttribute("id", "note-" + noteNum);

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

    const addSubBtn = document.createElement('button');
    addSubBtn.innerHTML = "Add Sub Note";
    addSubBtn.className = "edit"
    addSubBtn.setAttribute("id", "note-" + noteNum);
    /* addSubBtn.setAttribute("class", "addSub"); */
    addSubBtn.setAttribute("style", "background-color:#F1C232");

    toolbar.appendChild(addSubBtn)
    note.appendChild(toolbar);

    const textArea = document.createElement('textarea');
    textArea.readOnly = false;

    note.appendChild(textArea);
    mainListLine.appendChild(note);

    const subList = document.createElement("OL");
    subList.setAttribute("id", "note-" + noteNum);
    subList.setAttribute( "style", "list-style: none")

    mainListLine.appendChild(subList);
    mainList.appendChild(mainListLine);



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
        note.appendChild(textArea);
      }
    }
    var edObservable = Rx.Observable.fromEvent(edSaveBtn, 'click');
    edObservable.subscribe(edSaveNote);


    const addNewSubNote = {
      next: function() {
        subNoteNum++;
        const subListLine = document.createElement("LI")
        const childNote = document.createElement("textarea");
        const sDelBtn = document.createElement('button');
        sDelBtn.innerHTML = "Delete";
        sDelBtn.setAttribute("id", "subNote-" + subNoteNum);
        sDelBtn.setAttribute("class", "delete");
        sDelBtn.setAttribute("style", "background-color:red; color:white");
        subListLine.setAttribute("id", "subNote-" + subNoteNum);
        childNote.setAttribute("id", "subNote");
        childNote.setAttribute("style", "background-color:#595959");
        childNote.style.backgroundColor = noteColourBtn.value;
        subListLine.appendChild(childNote);
        subList.appendChild(subListLine);
        subListLine.appendChild(sDelBtn);
      
      
        
        const deleteNote = {
          next: function() {
            document.getElementById(sDelBtn.getAttribute("id")).remove();
          }
        }
        var delObservable = Rx.Observable.fromEvent(sDelBtn, 'click');
        delObservable.subscribe(deleteNote);

      }
    }
    var addSObservable = Rx.Observable.fromEvent(addSubBtn, 'click');
    addSObservable.subscribe(addNewSubNote);



    var noteColourBtn = document.getElementById('colours');
    textArea.style.backgroundColor = noteColourBtn.value;

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
