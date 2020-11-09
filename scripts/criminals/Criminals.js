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

// somehow need to get the name and the alibi of the known associates
// need to iterate over the array to get the known_associate ^^
// this is goiong to be part of a click event??
// lets populate in an alert window
// need to find where im using the criminals array and use that 
// ill be using a promise - which means dont forget to use .then() method
// make a render alibi funciton which uses an alert window

// Which components do you need to create for this feature? ALIBI MODULE
// Where is the data coming from in the API? Do you need a new provider? NO
// Which component should dispatch a custom event when the user clicks on the alibi button? CRIMINAL LIST?
// Which component should react to that custom event?
// Does data need to be send along with the event?
// Which DOM element would contain the list of alibis? Do you need a new one, or can they go in an existing one? A POP UP WINDOW, ID LIKE TO USE A NEW DOM ELEMENT
