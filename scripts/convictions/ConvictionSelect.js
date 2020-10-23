/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions, getConvictions } from "./ConvictionProvider.js"



// Get a reference to the DOM element where the eventHub should go
const eventHub = document.querySelector(".container")


// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")


export const ConvictionSelect = () => {
    // Get all convictions from application state
    getConvictions().then(() => {
    const convictions = useConvictions()
    render(convictions)
    })
}


const render = (convictionsCollection) => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(convictionObj => {
                    return `<option value="${convictionObj.id}">${conviction}</option>`
                }).join("")
            }
        </select>
    `
}


// This tells my event hub, which I just created for the .container, to listen for a change!
eventHub.addEventListener("change", event => {

    // only change if 'crimeSelect' is changed!
    if (event.target.id === "crimeSelect") {
        // now create a custom event. Provide an appropriate name.
        const customEventToDispatch = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })

        // the event has to be dispatched to the event hub
        eventHub.dispatchEvent(customEventToDispatch)
    }
})
