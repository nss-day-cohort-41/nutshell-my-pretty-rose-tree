import taskName from "./Task/Tasks.js"
import eventListener from "./Task/taskEventListeners.js"
import renderTasks from "./Task/taskList.js";
import API from "./Task/taskapi.js"
import newsHTML from './News/newsHTML.js'
import newsListeners from './News/news.js'
import newsAPI from './News/newsAPI.js'
import newsDisplay from './News/newsDOM.js'
import messageListeners from "./Messages/messageEventListeners.js"
import createMessageObject from "./Messages/createNewMessagesObject.js"
import eventsHTML from './Event/eventsHtmlComponent.js'
import eventsListeners from './Event/eventsListeners.js'
import eventsAPI from './Event/eventsAPIcalls.js'
import eventsDisplay from './Event/eventsDisplay.js'


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


// Invoking method to "create an event" button in DOM
eventsHTML.newEventButton();
// Invoking method displaying event form in DOM and saving new event object in API
eventsListeners.displayFormListener();
// Invoking method to get all events pertaining to active user and display events in DOM
const activeUserId = sessionStorage.getItem('activeUser')
eventsAPI.getAllActiveUserEvents(activeUserId).then(() => eventsDisplay.displayEventsList(eventsAPI.allActiveUserEvents))
.then(() => eventsDisplay.toggleStyle(eventsAPI.allActiveUserEvents))
// Invoking method to delete event when delete button is clicked
eventsListeners.deleteSelectedEvent();
// Invoking method to toggle CSS class to event 
// eventsDisplay.toggleStyle(eventsAPI.allActiveUserEvents);


// calling taskForm
taskName.taskForm();
// calling event listeners
eventListener();
// this makes tasks post to the dom. I am saying get all task and render to the dom
API.getTasks().then((response) => {
    renderTasks(response)
})




newsHTML.newNewsButton()
newsListeners.displayFormListener()
const activeUserId = sessionStorage.getItem('activeUser')
newsAPI.getNews(activeUserId).then(() => newsDisplay.displayNewsList(newsAPI.userNews))
.then(() => newsDisplay.toggleStyle(newsAPI.userNews))
newsListeners.deleteSelectedArticle()




