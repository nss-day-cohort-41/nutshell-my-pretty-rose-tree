const eventsAPI = {
  async saveEvent(eventObj) {
    const response = await fetch('http://localhost:8088/events', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(eventObj)
    })
    const eventPosted = response.json()
    return eventPosted
  }
}

export default eventsAPI;