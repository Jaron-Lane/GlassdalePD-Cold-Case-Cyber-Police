/*
    Author: Madi
    Responsibility: Get the alibis related to a single criminal and show it in a list
*/
import { useCriminals } from "./CriminalProvider.js"

const eventHub = document.querySelector(".container")


// Create and add an event listener to the eventHub that listens for when an alibi button was clicked
eventHub.addEventListener("alibiButtonClicked", (eventObject) => {
    console.log()
})

   // need to find the one criminal whose id matches the criminalId sent in the event

   console.log("Found the criminal!", foundCriminal)

   // add that criminal (and their alibis) to the criminal card



// a function that adds a list of alibis to the criminal card


// lets make a render method for adding alibis