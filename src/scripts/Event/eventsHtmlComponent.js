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
          <button type="submit" class="btn btn-primary" id="submitNewEvent">Submit Event</button>
        </form>
      </div>
    `

    eventContainer.innerHTML += eventForm
  }
}

export default eventsHTML;