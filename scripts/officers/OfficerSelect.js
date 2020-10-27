/*
 *   OfficerSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { getOfficers, useOfficers} from "./OfficerProvider.js"


 /*
Which element in your HTML contains all components?
That's your Event Hub. Get a reference to it here.
*/
const eventHub = document.querySelector(".container")


// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__officer")

export const OfficerSelect = () => {
    // Get all convictions from application state
    getOfficers().then(() => {
    const officers = useOfficers()
    render(officers)
    })
}

const render = (officerCollection) => {
/*
      Use interpolation here to invoke the map() method on
      the convictionsCollection to generate the option elements.
      Look back at the example provided above.
  */
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${
                officerCollection.map(officerObj => {
                    return `<option value="${officerObj.id}">${officerObj.name}</option>`
                }).join("")
            }
        </select>
    `
}  
// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        console.log("OfficerSelect: Change event happened in the officers dropdown")
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        const officerSelectCustomEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })
        
        // Dispatch event to event hub
        eventHub.dispatchEvent(officerSelectCustomEvent)
    }
})




    // Only do this if the `crimeSelect` element was changed


        // Create custom event. Provide an appropriate name.

        // Dispatch to event hub