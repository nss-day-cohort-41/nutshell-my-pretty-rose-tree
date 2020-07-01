import createTaskEntry from "./createTask.js"
import API from "./taskapi.js"
import renderTasks from "./taskList.js"

// this is the submit eventListener
const submitListener = () => {
document.getElementById("taskSubmit").addEventListener("click", event => {
   
    // hidden input
    let taskValue = document.getElementById("task")
    // pulling info from id in task.js
    let task = document.getElementById("taskEntry").value 
    let date = document.getElementById("taskDate").value
    let hiddenId = document.getElementById("task").value
    let userId = sessionStorage.getItem("activeUser")
     // if boxes are not filled an alert will pop up
     if(task === "" || date === ""){
        alert("Please complete filling out entry")
        // getting all the info for each Task
      }else {
        const newTaskObject = createTaskEntry(task, date, userId)
        
        // posting to Json-server
        API.submitTask(newTaskObject).then(() => {
            return API.getTasks()
         
        }).then((response) => {
           return renderTasks(response)
        })
         // resetting the task input
         document.getElementById("newTask").reset()
    }
    // stops the page from refreashing everytime you submit
    event.preventDefault()
})
}

export default submitListener
