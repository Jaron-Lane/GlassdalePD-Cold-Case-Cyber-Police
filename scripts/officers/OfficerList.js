import { Officer } from "./Officers.js"
import { useOfficers, getOfficers } from "./OfficerProvider.js"

/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/
const eventHub = document.querySelector(".container")
const officerContent = document.querySelector(".filters__officer")

export const OfficerList = () => {
    getOfficers().then(() => {
        const appStateOfficers = useOfficers()
        console.log(appStateOfficers)
        render(appStateOfficers)
    })
}

const render = (officerCollection) => {
    let officerRepresentation = ""
    for (singleOfficer of officerCollection) {
        officerRepresentation += Officer(singleOfficer)
    }

    officerContent.innerHTML = `
    <div class="officerContent">
        ${officerRepresentation}
    </div>
    `
}




    // review lines 68-115 of criminal list to review 