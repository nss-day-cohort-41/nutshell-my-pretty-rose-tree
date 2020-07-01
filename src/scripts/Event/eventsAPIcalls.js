// Object houses methdos for getting, posting and deleting events in API
const eventsAPI = {
  allActiveUserEvents: [],
  async saveEvent(eventObj) {
    const response = await fetch('http://localhost:8088/events', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(eventObj)
    })
    const eventPosted = response.json()
    return eventPosted
  },
  async getAllActiveUserEvents(activeUserId) {
    const response = await fetch(`http://localhost:8088/events?userId=${activeUserId}`)
    const data = await response.json()
    this.allEvents = data
    return data
  },
  async deleteEvent(eventId) {
    const response = await fetch(`http://localhost:8088/events/${eventId}`, {
      method: "DELETE"
    })
    const data = response.json()
    return data
  }
}

export default eventsAPI;