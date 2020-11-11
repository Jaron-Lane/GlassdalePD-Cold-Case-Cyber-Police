const eventHub = document.querySelector(".container")

export const Criminals = (criminalObject) => {
    return `
        <div class="criminal">
            <p class="criminal__name"><h3>${criminalObject.name}</h3></p>
            <p class="criminal__age">Age: ${criminalObject.age}</p>
            <p class="criminal__crime">Crime: ${criminalObject.conviction}</p>
            <p class="criminal__term__start">Term start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</p>
            <p class="criminal__term__end">Term end: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</p>
            <button id="associates--${criminalObject.id}">Associate Alibis</button>
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




