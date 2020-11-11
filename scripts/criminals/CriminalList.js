import { useConvictions } from '../convictions/ConvictionProvider.js'
import { useOfficers } from '../officers/OfficerProvider.js'
import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminals } from "./Criminals.js"
import { getCriminalFacilities, useCriminalFacilities } from '../facility/CriminalFacilityProvider.js'
import { getFacilities, useFacilities } from "../facility/FacilityProvider.js"

const eventHub = document.querySelector(".container")
const criminalContent = document.querySelector(".criminalsContainer")

/* export const CriminalList = () => {
    getCriminals().then(() => {
        const appStateCriminals = useCriminals()
        // console.log(appStateCriminals)
        render(appStateCriminals)
    })
} */

export const CriminalList = () => {
    // Kick off the fetching of both collections of data
    getFacilities()
        .then(getCriminalFacilities)
        .then(getCriminals)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                const facilities = useFacilities()
                const crimFac = useCriminalFacilities()
                const criminals = useCriminals()

                // Pass all three collections of data to render()
                render(criminals, facilities, crimFac)
            }
        )
}

const render = (criminalsToRender, allFacilities, allRelationships) => {
  // Step 1 - Iterate all criminals
  criminalContent.innerHTML = criminalsToRender.map(
    (criminalObject) => {
        // Step 2 - Filter all relationships to get only ones for this criminal
        const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

        // Step 3 - Convert the relationships to facilities with map()
        const facilities = facilityRelationshipsForThisCriminal.map(cf => {
            const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
            return matchingFacilityObject
        })

        // Must pass the matching facilities to the Criminal component
        return Criminals(criminalObject, facilities)
    }
).join("") 
}


// listen for the custom event that was dispatched in the ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
    // use the same property as in the event detail
    if (event.detail.crimeThatWasChosen !== "0") {
        const criminalsArray = useCriminals()
        const facilities = useFacilities()
        const crimFac = useCriminalFacilities()

        const convictionsArray = useConvictions()

        const convictionThatWasChosen = convictionsArray.find(convictionObj => {
            return convictionObj.id === parseInt(event.detail.crimeThatWasChosen)
        })

        const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
            return criminalObj.conviction === convictionThatWasChosen.name
        })

        render(filteredCriminalsArray, facilities, crimFac)
    }
})

// Listen for the custom event you dispatched in OfficerSelect
eventHub.addEventListener("officerSelected", event => {
    console.log(event)
    // debugger
    // Use the property you added to the event detail.
        if (event.detail.officer !=="0") {
            //Get the list of officers
            const officersArray = useOfficers()
            const facilities = useFacilities()
            const crimFac = useCriminalFacilities()
            
            const criminalsArray = useCriminals()

            const officerThatWasChosen = officersArray.find(officerObj => {
                return officerObj.id === parseInt(event.detail.officer)
                // '+' means parsInt
            })

            const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
                return criminalObj.arrestingOfficer === officerThatWasChosen.name
            })

            render(filteredCriminalsArray, facilities, crimFac)
        }




// THIS IS COMMENTED OUT BECAUSE ITS FROM PREVIOUS LESSONS


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



})
