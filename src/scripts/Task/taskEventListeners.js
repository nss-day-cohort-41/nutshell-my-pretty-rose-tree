import createTaskEntry from "./createTask.js"
import API from "./taskapi.js"

// this is the submit eventListener
const submitListener = () => {
document.getElementById("taskSubmit").addEventListener("click", event => {
   
    // hidden input
    let taskValue = document.getElementById("task")
    // getting info from task.js
    let task = document.getElementById("taskEntry").value 
    let date = document.getElementById("taskDate").value
    let hiddenId = document.getElementById("task").value
    let userId = sessionStorage.getItem("activeUser")
     // if boxes are not filled an alert will pop up
     if(task === "" || date === ""){
        alert("Please complete filling out entry")
      }else {
        const newTaskObject = createTaskEntry(task, date, userId)
        console.log(newTaskObject)
        API.submitTask(newTaskObject).then(() => {
            return API.getTasks
        })
     
    }
    event.preventDefault()
})
}
export default submitListener
