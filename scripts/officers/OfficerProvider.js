let officers = []

// export a copy of an array of officers from the fetch called 'useOfficers'
export const useOfficers = () => officers.slice()

/*
      Load database state into application state with a fetch().
      Make sure the last `then()` sets the local `convictions`
      variable to what is in the response from the API.
  */
export const getOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers")
        .then(response => response.json())
        .then(
            parsedOfficers => {
                // console.log(parsedOfficers)
                officers = parsedOfficers
            }
        )
}