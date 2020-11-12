import { getFacilities, useFacilities } from "./FacilityProvider.js"
import { Facility } from "./Facility.js"
import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "./CriminalFacilityProvider.js"


const eventHub = document.querySelector(".container")
const facilitiesContainer = document.querySelector(".facilityContainer")


eventHub.addEventListener("facilitiesClicked", () => {
    console.log("heard the click from the facilites button")
    FacilityList()
})

let facilities = []
let criminals = []
let crimFac = []

export const FacilityList = () => {
    getFacilities()
        .then(getCriminals)
        .then(getCriminalFacilities)
        .then(() => {
            facilities = useFacilities()
            criminals = useCriminals()
            crimFac = useCriminalFacilities()
            render()
    })
}


const render = () => {
    facilitiesContainer.innerHTML = facilities.map(
        (facilityObj) => {
            const criminalToFacilityRelationship = crimFac.filter(cf => cf.facilityId === facilityObj.id)
            const foundRelationship = criminalToFacilityRelationship.map(cf => {
                const correspondingCriminalObj = criminals.find(criminals => criminals.id === cf.criminalId)
                return correspondingCriminalObj
            })
        return Facility(facilityObj, foundRelationship)    
        }
    ).join("")
}



