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
    // this stops the page from refreashing everytime you click submit
    event.preventDefault()
})
}

// delete button
document.querySelector(".taskLog").addEventListener("click", event => {
  // this stops the page from refreashing everytime you click delete
  event.preventDefault()
  // this is targeting the delete buttom from taskToDom
  if(event.target.id.startsWith("deleteTask--")){
     //  this look at this id and divide left and right  delete task and the second is the id number
    const taskToDelete = event.target.id.split("--")[1]
  //  this is getting the info from the api delete task
    API.deleteTask(taskToDelete)
    .then((response) => {
      // this is getting all task and rendering the task to the dom
     API.getTasks().then((response) => {
       renderTasks(response)
  })
  })
  
}
})
checkTask() {
  const checkTaskButton = document.querySelector(".taskLog")
  checkTaskButton.addEventListener("click", clickEvent => {
    if(event.id.startsWith("checkTask")){
      console.log("is this working ")
      cont taskToCheck = ClickEvent.target.id.split("--")[1]
      const checked = event.target.checked
      if(checked === true){
        fetch(`http://localhost:8088/tasks/${taskToCheck}`)
        .then(response => response.json())
        .then(task => {
          const taskCheckedObject = {
              "userId": task.userId,
              "task": task.task,
              "date": task.date,
              "completed": ture

          }
          API.checkTask(taskToCheck, taskObj)
          document.querySelector(".taskLog").innerHTML
        })
      }
    }
  })
}

export default eventListener
