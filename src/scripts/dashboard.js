import taskName from "./Task/Tasks.js"
import eventListener from "./Task/taskEventListeners.js"
import renderTasks from "./Task/taskList.js";
import API from "./Task/taskapi.js"
import eventsHTML from './Event/eventsHtmlComponent.js'
import eventsListeners from './Event/eventsListeners.js'
import eventsAPI from './Event/eventsAPIcalls.js'
import eventsDisplay from './Event/eventsDisplay.js'

// Invoking method to "create an event" button in DOM
eventsHTML.newEventButton();
// Invoking method displaying event form in DOM and saving new event object in API
eventsListeners.displayFormListener();
// Invoking method to get all events pertaining to active user and display events in DOM
const activeUserId = sessionStorage.getItem('activeUser')
eventsAPI.getAllActiveUserEvents(activeUserId).then(() => eventsDisplay.displayEventsList(eventsAPI.allEvents))
// Invoking method to delete event when delete button is clicked
eventsListeners.deleteSelectedEvent();


// calling taskForm
taskName.taskForm();
// calling event listeners
eventListener();
// this makes tasks post to the dom. I am saying get all task and render to the dom
API.getTasks().then((response) => {
    renderTasks(response)
})







