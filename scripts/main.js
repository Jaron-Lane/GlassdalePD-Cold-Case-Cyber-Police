console.log("Welcome to the main module")

import { getOfficers } from "./officers/OfficerProvider.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"

ConvictionSelect()

CriminalList()

getOfficers()
