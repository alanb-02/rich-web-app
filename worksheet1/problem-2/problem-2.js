/* the add button is taken in */
/* notes constant will hold the data from the notes */
const addBtn = document.getElementById('add')  
const notes = JSON.parse(localStorage.getItem('notes'))  

if(notes) {  
  notes.forEach(note => addNewNote(note))  
}

/* listens to the click on teh add button */
addBtn.addEventListener('click', () => addNewNote())  

/* function to add note */
function addNewNote(text = '') {  
  const note = document.createElement('div')  
  note.classList.add('note')
  /* creating the seperate notes text area */  
  note.innerHTML = `  
  <div class="tools">
    <button class="green" style="background-color:#93c47d"></button>
    <button class="yellow" style="background-color:#ffd966"></button>
    <button class="blue" style="background-color:#6fa8dc"></button>
    <button class="pink" style="background-color:#c27ba0"></button>
    <button class="edit" style="color:#F1C232">Edit/Save</button>  
    <button class="delete" style="color:red">Delete</button>  
  </div>  
  <div class="main ${text ? "" : "hidden"}"></div>
  <textarea class="${text ? "hidden" : ""}"></textarea>  
  `

  /* taking in the colour selector buttons, also the edit/save and delete button */
  const greenBtn = note.querySelector('.green')
  const yellowBtn = note.querySelector('.yellow')
  const blueBtn = note.querySelector('.blue')
  const pinkBtn = note.querySelector('.pink')
  const editBtn = note.querySelector('.edit')  
  const deleteBtn = note.querySelector('.delete')  
  const main = note.querySelector('.main')  
  const textArea = note.querySelector('textarea')  
  textArea.value = text  
  main.innerHTML = marked(text)  

  /* delete button listener removes the note */
  deleteBtn.addEventListener('click', () => {  
    note.remove()  
    updateLS()  
  })  
  /* edit button listener */
  editBtn.addEventListener('click', () => {  
    main.classList.toggle('hidden')  
    textArea.classList.toggle('hidden')  
  })  
  /* taking in the text within the notes */
  textArea.addEventListener('input', (e) => {  
    const { value } = e.target  
    main.innerHTML = marked(value)  
    updateLS()  
  })

  /* the color picking buttons to change teh color of the notes */
  greenBtn.addEventListener('click', () => { 
    note.style.backgroundColor = '#93c47d';
    updateLS()  
  })
  yellowBtn.addEventListener('click', () => { 
    note.style.backgroundColor = '#ffd966';
    updateLS()  
  })
  blueBtn.addEventListener('click', () => { 
    note.style.backgroundColor = '#6fa8dc';
    updateLS()  
  })
  pinkBtn.addEventListener('click', () => { 
    note.style.backgroundColor = '#c27ba0';
    updateLS()  
  })  
  
  document.body.appendChild(note)  
}


function updateLS() {  
  const notesText = document.querySelectorAll('textarea')  
  const notes = []  
  notesText.forEach(note => notes.push(note.value))  
  localStorage.setItem('notes', JSON.stringify(notes))  
}  