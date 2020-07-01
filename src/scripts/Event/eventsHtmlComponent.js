const eventsHTML = {
  // Method creating HTML button for "create a new event"
  newEventButton() {
    const eventContainer = document.getElementById('eventContainer')

    const eventHtmlButton = `
      <div class="eventButton">
        <button type="button" class="btn btn-secondary" id="createEventButton">Create an event</button>
      </div>
      `

    eventContainer.innerHTML = eventHtmlButton
  },
  // Method creating HTML for event form
  newEventForm() {
    const eventContainer = document.getElementById('eventContainer')

    const eventForm = `
      <div class="eventForm">
        <form id="eventFormEntry">
          <div class="form-group">
            <label for="newEventName">Event Name</label>
            <input type="text" class="form-control" id="newEventName" placeholder="Enter event name">
          </div>
          <div class="form-group">
            <label for="newEventDate">Date</label>
            <input type="date" class="form-control" id="newEventDate">
          </div>
          <div class="form-group">
            <label for="newEventAddress">Event Address</label>
            <input type="text" class="form-control" id="newEventAddress" placeholder="Ex. 1234 Main St, New York, NY 10005">
          </div>
          <button type="submit" class="btn btn-secondary" id="submitNewEvent">Submit Event</button>
        </form>
      </div>
    `

    eventContainer.innerHTML += eventForm
  },
  // Method converts event data to HTML representation
  eventHtmlRepresentation(eventObj) {
    const eventHtmlRep = `
      <div class="card w-50" id="event--${eventObj.id}">
        <div class="card-body">
          <h5 class="card-title" id="eventName">${eventObj.name}</h5>
          <p class="card-text" id="eventDate">${eventObj.date}</p>
          <p class="card-text" id="eventLocation">${eventObj.location}</p>
          <button type="button" class="btn btn-secondary" id="deleteEvent--${eventObj.id}">Delete Event</button>
        </div>
      </div>
    `

    return eventHtmlRep
  }
}

export default eventsHTML;