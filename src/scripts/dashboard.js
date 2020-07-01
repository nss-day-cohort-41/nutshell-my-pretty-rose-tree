import taskName from "./Task/Tasks.js"
import eventListener from "./Task/taskEventListeners.js"
import renderTasks from "./Task/taskList.js";
import API from "./Task/taskapi.js"
import messageListeners from "./Messages/messageEventListeners.js"
import createMessageObject from "./Messages/createNewMessagesObject.js"


messageListeners.displayListener()
createMessageObject()

 const logout = {
 
 redirectToLogin() {
    window.location.replace("http://localhost:5000/src/");
  },
  logoutUser() {
    sessionStorage.removeItem('activeUser')
    this.redirectToLogin()
  },
  logoutListener() {
    document.getElementById('logoutButton').addEventListener("click", event => {
      this.logoutUser()
    })
}
 }

 logout.logoutListener()


// calling taskForm
taskName.taskForm();
// calling event listeners
eventListener();
// this makes tasks post to the dom. I am saying get all task and render to the dom
API.getTasks().then((response) => {
    renderTasks(response)
})







