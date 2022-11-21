let noteNum = 0;
let noteFull = 0;
let subNoteNum = 0;
var add = document.getElementById("add");


const addNewNote = {
  next: function() {

    if (noteFull === 3){
      alert("Notepad Full!!");
    }else {
      noteNum++;
      noteFull++;
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
      addSubBtn.setAttribute("id", "note-" + noteNum);
      addSubBtn.setAttribute("class", "addSub");
      addSubBtn.setAttribute("style", "background-color:#F1C232");
      toolbar.appendChild(addSubBtn)
  
      note.appendChild(toolbar);
  
      const textArea = document.createElement('textarea');
      textArea.readOnly = false;
      note.appendChild(textArea);


      const toolbar2 = document.createElement('div');
      toolbar2.setAttribute("class", "tools");
      note.appendChild(toolbar2);

      const delSubBtn = document.createElement('button');
      delSubBtn.innerHTML = "Delete";
      delSubBtn.setAttribute("id", "Note-" + noteNum);
      delSubBtn.setAttribute("class", "delete");
      delSubBtn.setAttribute("value", subNoteNum);
      delSubBtn.setAttribute("style", "background-color:red");
      toolbar2.appendChild(delSubBtn)
  
      var noteColourBtn = document.getElementById('colours');
  
      document.body.appendChild(note);
  
      textArea.style.backgroundColor = noteColourBtn.value;
  
      const deleteNote = {
        next: function(){
          document.getElementById(delBtn.getAttribute("id")).remove();
          noteFull--;
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

      const adSubNote = {
        next: function() {
          const subTextDiv = document.createElement('div');
          subTextDiv.setAttribute("class", "snote-" + noteNum);
          subTextDiv.setAttribute("value", subNoteNum);
          subTextDiv.setAttribute("id", "Note-" + noteNum);
          note.appendChild(subTextDiv);

          const subTextArea = document.createElement('textarea');
          subTextDiv.appendChild(subTextArea);

          const deleteSubNote = {
            next: function(){
              document.getElementById(delSubBtn.getAttribute("value")).remove();
              noteFull--;
            }/* =========================================== delete button va;ue */
          }
          var delSubObservable = Rx.Observable.fromEvent(delSubBtn, 'click');
          delSubObservable.subscribe(deleteSubNote);

          subNoteNum++;
        }
      }
      var adsubObservable = Rx.Observable.fromEvent(addSubBtn, 'click');
      adsubObservable.subscribe(adSubNote);

      
  
      return note.id;
    }
  }
}

var addObservable = Rx.Observable.fromEvent(add, 'click');
addObservable.subscribe(addNewNote);

