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



// Listen for the custom event you dispatched in OfficerSelect


    // Use the property you added to the event detail.


        //Get the list of officers


        // console.log("array of officers", officersArray)

        /* 
        We have the the id of the officer that the user selected from the drop down. But each officer object has the name of the crime they were convicted for. So we need to get the name of the conviction associated with the unique identifier. 
        */

        // Get the array of officers


        // Use the find method to get the first object in the officerss array that has the same id as the id of the chosen crime


        // console.log("convictionThatWasChosen", convictionThatWasChosen)

        /*
        Now that we have the name of the chosen officeer, filter the officerss application state down to the people that arrested the criminal
        */


        // console.log("filteredOfficersArray", filteredOfficersArray)

    /*
      Then invoke render() and pass the filtered collection as
      an argument
    */


    // review lines 68-115 of criminal list to review 