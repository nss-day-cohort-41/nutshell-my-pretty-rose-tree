// Object houses methdos for getting, posting and deleting events in API
const eventsAPI = {
  allEvents: [],
  async saveEvent(eventObj) {
    const response = await fetch('http://localhost:8088/events', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(eventObj)
    })
    const eventPosted = response.json()
    return eventPosted
  },
  async getAllEvents() {
    const response = await fetch('http://localhost:8088/events')
    const data = await response.json()
    this.allEvents = data
    return data
  }
}

export default eventsAPI;