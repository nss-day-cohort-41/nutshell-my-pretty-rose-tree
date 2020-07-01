import eventsHTML from "./eventsHtmlComponent.js"

const eventsDisplay = {
  displayEventsList(arrayOfEvents) {
    const eventListElement = document.getElementById('eventList')
    eventListElement.innerHTML = ""
    eventListElement.innerHTML = "<h4>Upcoming Events</h4>"

    for (const eventObj of arrayOfEvents.reverse()) {
      const eventHTML = eventsHTML.eventHtmlRepresentation(eventObj)
      eventListElement.innerHTML += eventHTML
    }
   

  }
  
}

export default eventsDisplay;
