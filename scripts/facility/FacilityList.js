import { Facility } from "./Facility.js"
import { getFacilities, useFacilities } from "./FacilityProvider.js"
import { getCriminalFacilites, useCriminalFacilites } from "./CriminalFacilityProvider.js"
// import { Facility } from "./Facility.js"

const facilitiesContainer = document.querySelector(".facilityContainer")

export const FacilityList = () => {

    getFacilities()
        .then(() => {
            const facilityArray = useFacilities()
            
            let facilityHTMLRepresentation = "";

            for (const facility of facilityArray) {
                facilityHTMLRepresentation += Facility(facility)

                facilitiesContainer.innerHTML = `
                <h3>Criminal Facilities</h3>
                <section class="facilityList">
                    ${facilityHTMLRepresentation}
                </section>
                `
            }
        })
}