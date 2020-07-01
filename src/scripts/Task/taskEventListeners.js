import createTaskEntry from "./createTask.js"
import API from "./taskapi.js"
import renderTasks from "./taskList.js"

// this is the submit eventListener
const eventListener = () => {
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

// delete button
document.querySelector(".taskLog").addEventListener("click", event => {
  if(event.target.id.startsWith("deleteTask--")){
    const taskToDelete = event.target.id.split("--")[1];
    console.log("taskToDelete")
    API.deleteTask(taskToDelete)
  
    .then((response) => {
      return renderTasks(response)
  })
}

})

export default eventListener
