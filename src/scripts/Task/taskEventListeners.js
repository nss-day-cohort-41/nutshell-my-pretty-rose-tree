const { default: createTaskEntry } = require("./createTask")

import createTaskEntry from "./createTaskEntry.js"
import API from "./taskapi.js"

// this is the submit eventListener
document.getElementById("taskSubmit").addEventListener("click", event => {
 
    // hidden input
    let taskValue = document.getElementById("task")
    // getting info from task.js
    let task = document.getElementById("taskEntry").value 
    let date = document.getElementById("taskDate").value
    let hiddenId = document.getElementById("task").value
     // if boxes are not filled an alert will pop up
     if(task === "" || date === ""){
        alert("Please complete filling out entry")
      }else {
        const newTaskObject = createTaskEntry(task, date)
        console.log(newTaskObject)
        API.submitTask(newTaskObject)
     
    }
    event.preventDefault()
})
