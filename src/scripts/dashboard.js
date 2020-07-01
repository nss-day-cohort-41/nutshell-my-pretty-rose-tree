import taskName from "./Task/Tasks.js"
import messageListeners from "./Messages/messageEventListeners.js"
import createMessageObject from "./Messages/createNewMessagesObject.js"
taskName.taskForm();


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
