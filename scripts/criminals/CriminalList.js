import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminals } from "./Criminals.js"

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