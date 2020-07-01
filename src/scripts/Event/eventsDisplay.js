import eventsHTML from "./eventsHtmlComponent.js"

const eventsDisplay = {
  displayEventsList(arrayOfEvents) {
    const eventListElement = document.getElementById('eventList')
    eventListElement.innerHTML = ""
    eventListElement.innerHTML = `<hr><h4 id="eventsListTitle">Upcoming Events</h4><hr>`

    const sortedArray = arrayOfEvents.sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    })

    if (arrayOfEvents == "") {
      eventListElement.innerHTML += `<h5 id="noEventsMessage">No Events</h5>`
    } else {
      for (const eventObj of sortedArray) {
        const eventHTML = eventsHTML.eventHtmlRepresentation(eventObj)
        eventListElement.innerHTML += eventHTML
      }
    }
  }
}

export default eventsDisplay;