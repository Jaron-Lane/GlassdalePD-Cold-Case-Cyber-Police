const eventHub = document.querySelector(".container")

export const Criminals = (criminalObject, facilities) => {
    return `
    <div class="criminal">
        <h4>${criminalObject.name}</h4>
        <div class="criminal__details">
            <p>Convicted for ${criminalObject.conviction}</p>
            <p>Arrested by ${criminalObject.arrestingOfficer}</p>
            <p>Incarcerated between:
                ${new Date(criminalObject.incarceration.start).toLocaleDateString()} and
                ${new Date(criminalObject.incarceration.end).toLocaleDateString()}
            </p>
            <p>Age: ${criminalObject.age}</p>
            <div>
                <h2>Facilities</h2>
                <ul>
                    ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
                </ul>
            </div>
            <button id="associates--${criminalObject.id}">Show Associates</button>
        </div>
    </div>
    `
}

eventHub.addEventListener("click", alibiClick => {
    const [prefix, criminalId] = alibiClick.target.id.split("--")

    if (alibiClick.target.id.startsWith("associates--")) {
        console.log("button was clicked", prefix, criminalId)

        const newCustomEvent = new CustomEvent("alibiButtonClicked", {
            detail: {
                criminalId: criminalId
                // something up with this^ and idk what
            }
        })
    eventHub.dispatchEvent(newCustomEvent)        
    }
})


// Which components do you need to create for this feature? 
// Where is the data coming from in the API? Do you need a new provider? NO
// Which component should dispatch a custom event when the user clicks on the alibi button? CRIMINALs
// Which component should react to that custom event? CRIMINAL LIST?
// Does data need to be send along with the event? YES, BUT NOT SURE WHY...
// Which DOM element would contain the list of alibis? Do you need a new one, or can they go in an existing one? A POP UP WINDOW, ID LIKE TO USE A NEW DOM ELEMENT




