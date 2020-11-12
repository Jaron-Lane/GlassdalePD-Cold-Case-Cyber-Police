console.log("Welcome to the main module")


import { CriminalList } from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { NoteList } from "./notes/NoteList.js"
import { DisplayFacilitiesButton } from "./facility/DisplayFacilitiesButton.js"
import "./facility/FacilityList.js"



NoteForm()
CriminalList()
ConvictionSelect()
OfficerSelect()
NoteList()
DisplayFacilitiesButton()


