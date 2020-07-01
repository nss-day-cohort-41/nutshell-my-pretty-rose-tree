import taskName from "./Task/Tasks.js"
import eventsHTML from './Event/eventsHtmlComponent.js'
import eventsListeners from './Event/eventsListeners.js'
import eventsAPI from './Event/eventsAPIcalls.js'
import eventsDisplay from './Event/eventsDisplay.js'

taskName.taskForm();

// Invoking method to "create an event" button in DOM
eventsHTML.newEventButton();
// Invoking method displaying event form in DOM and saving new event object in API
eventsListeners.displayFormListener();
// Invoking method to get all events and display events in DOM
eventsAPI.getAllEvents().then(() => eventsDisplay.displayEventsList(eventsAPI.allEvents))