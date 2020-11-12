const contentTarget = document.querySelector(".facility__button")
const eventHub = document.querySelector(".container")

export const DisplayFacilitiesButton = () => {
    contentTarget.innerHTML = `
    <button id="display-facilities-button">Criminal Facilities</button>
    `
}

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "display-facilities-button") {
        console.log("facilities button was clicked")
        const facilitiesButtonClicked = new CustomEvent("facilitiesClicked")
        
        eventHub.dispatchEvent(facilitiesButtonClicked)
    }
})