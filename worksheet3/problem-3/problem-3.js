/* number of notes */
let noteNum = 0;
/* number of sub notes */
let subNoteNum = 0;
/* getting the add note button */
var add = document.getElementById("add");
/* getting the main list to add the notes to */
var mainList = document.getElementById("main-list");

/* adding a new note */
const addNewNote = {
  next: function() {
    /* increment numebr of notes */
    noteNum++;

    /* list line to which the main note is added, also attributes are set */
    const mainListLine = document.createElement('LI');
    mainListLine.setAttribute("id", "note-" + noteNum);

    /* create a div to hold note dn its attributes are set*/
    const note = document.createElement('div');
    note.setAttribute("id", "note-" + noteNum);
    note.setAttribute("class", "note");

    /* creating toolbar dive that will hold all the buttons for each note and setting class*/
    const toolbar = document.createElement('div');
    toolbar.setAttribute("class", "tools");

    /* creating the the note delete button and setting sttributes */
    const delBtn = document.createElement('button');
    delBtn.innerHTML = "Delete";
    delBtn.setAttribute("id", "note-" + noteNum);
    delBtn.setAttribute("class", "delete");
    delBtn.setAttribute("style", "background-color:red");

    /* adding the delete button to the toolbar div */
    toolbar.appendChild(delBtn)

    /* creating the editi/save note button and attributes set */
    const edSaveBtn = document.createElement('button');
    edSaveBtn.innerHTML = "Save";
    edSaveBtn.setAttribute("id", "note-" + noteNum);
    edSaveBtn.setAttribute("class", "edit");
    edSaveBtn.setAttribute("style", "background-color:green");
    
    /* adding the edit.save button to the toolbar div */
    toolbar.appendChild(edSaveBtn)

    /* creating utton and setting attributes to add sub notes */
    const addSubBtn = document.createElement('button');
    addSubBtn.innerHTML = "Add Sub Note";
    addSubBtn.className = "edit"
    addSubBtn.setAttribute("id", "note-" + noteNum);
    addSubBtn.setAttribute("style", "background-color:#F1C232");

    /* add sub note button is added to toolbar div */
    toolbar.appendChild(addSubBtn)
    /* adding the toolbar tothe note div */
    note.appendChild(toolbar);

    /* creating the textarea of the note  */
    const textArea = document.createElement('textarea');
    /* setting the text area as editable upon creation */
    textArea.readOnly = false;

    /* appending the textarea to the note div */
    note.appendChild(textArea);
    /* add the note to the main list line */
    mainListLine.appendChild(note);
    
    /* createing a nestetd list to hold sub notes */
    const subList = document.createElement("OL");
    subList.setAttribute("id", "note-" + noteNum);
    subList.setAttribute( "style", "list-style: none")

    /* nested list is added tothe main list line */
    mainListLine.appendChild(subList);
    /* the main list line is added to the main list */
    mainList.appendChild(mainListLine);



    /* function for deleteing the note (div) when the note delete button is clicked */
    const deleteNote = {
      next: function(){
        /* the delete botton has the same id as the note div and uses it to remove the div*/
        document.getElementById(delBtn.getAttribute("id")).remove();
      }
    }
    /* when delete button on the note is clicked */
    var delObservable = Rx.Observable.fromEvent(delBtn, 'click');
    delObservable.subscribe(deleteNote);



    /* fucntion to chnge the note from being editable and also saving it (not editable) */
    const edSaveNote = {
      next: function() {
        /* checks if the textarea of the not is readOnly or not */
        /* if it is not readONly  when button is clicked the textarea will become readonly*/
        if (textArea.readOnly == false){
          textArea.readOnly = true;
          /* changing the button for new role of button */
          edSaveBtn.innerHTML = "Edit";
          /* if it is readONly then when button is clicked the textarea will make the are not readonly*/
        }else {
          textArea.readOnly = false;
          /* changing the button for new role of button */
          edSaveBtn.innerHTML = "Save";
        }
        /* update the textarea of the note in the note div */
        note.appendChild(textArea);
      }
    }
    /* when the edit / save button is clicked */
    var edObservable = Rx.Observable.fromEvent(edSaveBtn, 'click');
    edObservable.subscribe(edSaveNote);



    /* creating a sub note */
    const addNewSubNote = {
      next: function() {
        /* number of sub note incremented when sub note is created */
        subNoteNum++;

        /* sub list line to be put in the nested list for the main note */
        const subListLine = document.createElement("LI")
        const childNote = document.createElement("textarea");
        const sDelBtn = document.createElement('button');
        /* setting attributes */
        sDelBtn.innerHTML = "Delete";
        sDelBtn.setAttribute("id", "subNote-" + subNoteNum);
        sDelBtn.setAttribute("class", "delete");
        sDelBtn.setAttribute("style", "background-color:red; color:white");
        subListLine.setAttribute("id", "subNote-" + subNoteNum);
        childNote.setAttribute("id", "subNote");
        childNote.setAttribute("style", "background-color:#595959");
        childNote.style.backgroundColor = noteColourBtn.value;
        /* the textare sub note is added to the sub list line */
        subListLine.appendChild(childNote);
        /* the sublist line is added to the sub list */
        subList.appendChild(subListLine);
        /* the sub list delet button is adso added to the sublist */
        subListLine.appendChild(sDelBtn);
      
      
        /* delete the single sublist */
        const deleteNote = {
          next: function() {
            /* the delete botton has the same id as the sub note div and uses it to remove the LI*/
            document.getElementById(sDelBtn.getAttribute("id")).remove();
          }
        }
        /* when delete sub note is clicked */
        var delObservable = Rx.Observable.fromEvent(sDelBtn, 'click');
        delObservable.subscribe(deleteNote);

      }
    }
    /* when add new subnote is clicked */
    var addSObservable = Rx.Observable.fromEvent(addSubBtn, 'click');
    addSObservable.subscribe(addNewSubNote);


    /* the colour input is read in */
    var noteColourBtn = document.getElementById('colours');
    /* stting the textarea colour of that note to bet the one selected when not eis added */
    textArea.style.backgroundColor = noteColourBtn.value;

  }
}
/* when useer click thes the add note button */
var addObservable = Rx.Observable.fromEvent(add, 'click');
addObservable.subscribe(addNewNote);
