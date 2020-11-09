// convert object to HTML string
export const noteAsHTML = (noteObj) => {
    // return that HTML String
    return `
    <section class="note">
        <h4>Author: ${noteObj.author}</h4>
        <p>Suspect: ${noteObj.suspect}</p>
        <p>Date of Interview: ${noteObj.dateOfInterview}</p>
        <p>Notes: ${noteObj.noteField}</p>
    </section>
`
}