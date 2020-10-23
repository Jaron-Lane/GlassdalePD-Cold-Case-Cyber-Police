import { useConvictions } from '../convictions/ConvictionProvider.js'
import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminals } from "./Criminals.js"

const eventHub = document.querySelector(".container")
const criminalContent = document.querySelector(".criminalsContainer")


export const CriminalList = () => {
    getCriminals().then(() => {
        const appStateCriminals = useCriminals()
        // console.log(appStateCriminals)
        render(appStateCriminals)
    })
}

const render = (criminalCollection) => {
    let criminalHTMLrepresentation = ""
    for (const isolatedCriminal of criminalCollection) {
        criminalHTMLrepresentation += Criminals(isolatedCriminal)
    }

    criminalContent.innerHTML = `
    <div class="criminalContent">
        ${criminalHTMLrepresentation}
    </div>
    `
}


// listen for the custom event that was dispatched in the ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
    // use the same property as in the event detail
    if (event.detail.crimeThatWasChosen !== "0") {
        const criminalsArray = useCriminals()

        const convictionsArray = useConvictions()

        const convictionThatWasChosen = convictionsArray.find(convictionObj => {
            return convictionObj.id === parseInt(event.detail.crimeThatWasChosen)
        })

        const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
            return criminalObj.conviction === convictionThatWasChosen.name
        })

        render(filteredCriminalsArray)
    }
})






