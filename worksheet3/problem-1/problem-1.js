/* number of notes */
let noteNum = 0;
/* getting the add note button */
var add = document.getElementById("add");


/* adding a new note */
const addNewNote = {
  next: function() {
    /* increment numebr of notes */
    noteNum++;

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
    /* adding the toolbar tothe note div */
    note.appendChild(toolbar);

    /* creating the textarea of the note  */
    const textArea = document.createElement('textarea');
    /* setting the text area as editable upon creation */
    textArea.readOnly = false;

    /* appending the textarea to the note div */
    note.appendChild(textArea);
    /* the colour input is read in */
    var noteColourBtn = document.getElementById('colours');
    /* adding the note div to the page body */
    document.body.appendChild(note);

    /* stting the textarea colour of that note to bet the one selected when not eis added */
    textArea.style.backgroundColor = noteColourBtn.value;


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
    

    return note.id;
  }
}
/* when useer click thes the add note button */
var addObservable = Rx.Observable.fromEvent(add, 'click');
addObservable.subscribe(addNewNote);

