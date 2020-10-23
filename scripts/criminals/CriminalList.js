import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminals } from "./Criminals.js"

const eventHub = document.querySelector(".container")

// listen for the custom event that was dispatched in the ConvictionSelect
eventHub.addEventListener("customEventToDispatch", event => {
    // use the same property as in the event detail
    if (event.detail.crimeThatWasChosen !== "0") {
        const matchingCriminals = appStateCriminals.filter()
    }
})

const render = criminalCollection => {
    contentTarget.innerHTML = /* noIdeaWhatGoesHere */
}


export const CriminalList = () => {
    getCriminals().then(() => {
        const appStateCriminals = useCriminals()
        const criminalContent = document.querySelector(".criminalsContainer")
    
        let criminalHTMLrepresentation = ""
        for (const isolatedCriminal of appStateCriminals) {
            criminalHTMLrepresentation += Criminals(isolatedCriminal)
        }

        criminalContent.innerHTML += `
        <div class="criminalContent">
            ${criminalHTMLrepresentation}
        </div>
        `    
    })
}

