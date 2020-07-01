import eventsHTML from "./eventsHtmlComponent.js";
import createNewEventObj from "./createEventObj.js";
import eventsAPI from "./eventsAPIcalls.js";
import eventsDisplay from "./eventsDisplay.js";

const eventsListeners = {
  // Method displaying new event form when "create an event" button is clicked
  displayFormListener() {
    const createEventButton = document.getElementById('createEventButton')

    createEventButton.addEventListener('click', event => {
      // Invoke method creating and displaying new event form in DOM
      eventsHTML.newEventForm()

      // Invoke method creating new event object with form values and posting to API
      this.createEventListener()
    })
  },
  // Method creating new event object and posting in API when "create new event" button is clicked
  createEventListener() {
    const submitEventButton = document.getElementById('submitNewEvent')

    submitEventButton.addEventListener('click', event => {
      event.preventDefault()

      const newEventNameValue = document.getElementById('newEventName').value
      const newEventDateValue = document.getElementById('newEventDate').value
      const newEventAddressValue = document.getElementById('newEventAddress').value
      const activeUserId = sessionStorage.getItem('activeUser')
      
      if (newEventNameValue === "" || newEventDateValue ===  "" || newEventAddressValue === "") {
        alert("All event fields must be filled out")
      } else {
        // Pass-in form input values to function creating new event object
        const newEventObj = createNewEventObj(activeUserId, newEventNameValue, newEventDateValue, newEventAddressValue)

        // POST new event object to API then display new event in display event list
        eventsAPI.saveEvent(newEventObj)
        .then(() => eventsAPI.getAllActiveUserEvents(activeUserId))
        .then(response => {
          eventsDisplay.displayEventsList(response)
          document.getElementById('eventFormEntry').reset()
        })
      }
    })
  },
  // Method deletes event selected
  deleteSelectedEvent() {
    const eventListElement = document.getElementById('eventList')
    const activeUserId = sessionStorage.getItem('activeUser')

    eventListElement.addEventListener('click', event => {

      if (event.target.id.startsWith('deleteEvent--')) {
        const eventToBeDeletedId = event.target.id.split('--')[1]
        
        eventsAPI.deleteEvent(eventToBeDeletedId)
        .then(() => eventsAPI.getAllActiveUserEvents(activeUserId))
        .then(response => eventsDisplay.displayEventsList(response))
      }
    })
  }
}

export default eventsListeners;