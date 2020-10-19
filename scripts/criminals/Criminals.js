export const Criminals = (criminalObject) => {
    return `
        <div class="criminal">
            <p class="criminal__name">${criminalObject.name}</p>
            <p class="criminal__age">Age: ${criminalObject.age}</p>
            <p class="criminal__crime">Crime: ${criminalObject.conviction}</p>
            <p class="criminal__term__start">Term start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</p>
            <p class="criminal__term__end">Term end: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</p>
        </div>
    `
}