import { saveNote } from "./NoteProvider.js"

const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        <input id="note--dateOfInterview" type="date"/>
        <input id="note--author" type="text" placeholder="Your Name Here"/>
        <input id="note--suspect" type="text" placeholder="Suspect Name"/>
        <textarea id="note--note" placeholder="Your Note Here"></textarea>
        <button id="saveNote">Save Note</button>
    `
}



// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        // Grab input values
        const dateOfInterview = document.getElementById("note--dateOfInterview").value
        const author = document.getElementById("note--author").value
        const suspect = document.getElementById("note--suspect").value
        const noteField = document.getElementById("note--note").value

        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            dateOfInterview,
            author,
            suspect,
            noteField,
        }

        // Change API state and application state
        saveNote(newNote)
    }
})


export const NoteForm = () => {
    render()
}