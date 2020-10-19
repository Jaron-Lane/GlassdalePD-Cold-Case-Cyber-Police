import { getCriminals, useCriminals } from './criminals/CriminalProvider.js'

export const CriminalList = () => {
    getCriminals().then(() => {
        const appStateCriminals = useCriminals()
    }

    )
}