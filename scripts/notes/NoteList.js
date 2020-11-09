// get the notes from the api >> use the notes array
import { noteAsHTML } from "./Note.js"
import { getNotes, useNotes } from "./NoteProvider.js"

const eventHub = document.querySelector(".container")
const notesContainer = document.querySelector(".savedNoteContainer")


export const NoteList = () => {
    getNotes().then(() => {
        const notes = useNotes()
        render(notes)
    })
}

// iterate the notes array >> make an html representation each
const render = (noteCollection) => {
    let noteHTMLrepresentation = ""
    for (const note of noteCollection) {
        noteHTMLrepresentation += noteAsHTML(note)
    }

    notesContainer.innerHTML = `
    <div class="noteContent">
        <h3>Case Notes</h3>
        ${noteHTMLrepresentation}
    </div>
    `
}

eventHub.addEventListener("noteStateChanged", () => {
    NoteList()
})


// render html string of notes to the notesContainer element on the DOM
