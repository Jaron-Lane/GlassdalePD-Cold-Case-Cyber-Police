// convert object to HTML string
const noteAsHTML = (noteObj) => {
    // return that HTML String
    return `
    <section class="note">
        <h4>Author: ${noteObj.author}</h4>
        <p>Suspect: ${noteObj.suspect}</p>
        <p>Date of Interview: ${noteObj.dateOfInterview}</p>
        <p>Time of Entry: ${new Date(noteObj.timestamp).toLocaleDateString('en-US')}</p>
        <p>Notes: ${noteObj.notes}</p>
    </section>
`
}