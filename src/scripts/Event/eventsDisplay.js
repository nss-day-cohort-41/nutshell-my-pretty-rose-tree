import eventsHTML from "./eventsHtmlComponent.js"

// Object houses methods pertaining to displaying events in the DOM
const eventsDisplay = {
  // Method displays events in event list container in DOM
  displayEventsList(arrayOfEvents) {
    const eventListElement = document.getElementById('eventList')
    eventListElement.innerHTML = ""
    eventListElement.innerHTML = `<h4 id="eventsListTitle">Upcoming Events</h4>`

    // Sorts the dates in all event objects placing the latest event first
    const sortedArray = arrayOfEvents.sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    })

    if (arrayOfEvents == "") {
      eventListElement.innerHTML += `<h5 id="noEventsMessage">No events found 😭</h5>`
    } else {
      for (const eventObj of sortedArray) {
        const eventHTML = eventsHTML.eventHtmlRepresentation(eventObj)
        eventListElement.innerHTML += eventHTML
      }
    }
  },
  // Method toggles CSS shadow styling on event occurring right after current date
  toggleStyle(arrayOfEvents) {
    // Grabbing current date
    const currentDate = new Date().toLocaleDateString()

    // Sorting array of events by date (earliest first)
    const sortedArray = arrayOfEvents.sort((a, b) => {
      return new Date(a.date) - new Date(b.date)
    })

    // Finding the first event whose date is greater than the current date
    const foundEvent = sortedArray.find(
      eventObj => currentDate < eventObj.date
    )

    // Accessing the id of the first event found and adding a class for later CSS manipulation
    document.getElementById(`event--${foundEvent.id}`).classList.add("highlight")
  }
}

export default eventsDisplay;