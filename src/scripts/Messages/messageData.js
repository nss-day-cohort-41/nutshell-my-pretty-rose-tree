import messageHTMLCalls from "./messagesRenderHTML.js"

// Object houses methods corresponding to getting/posting message data in/from API database
const messagesAPI = {
    // Array storing all message objects upon invoking getAllMessages method
    listOfMessages: [],
    // Method POSTS new message object to API
    async postMessage(messageObject) {
      const response = await fetch('http://localhost:8088/messages', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(messageObject)
      });
      const messageData = await response.json().then(() => messageHTMLCalls.renderMessageHTML(this.listOfMessages)) ;
      return messageData
    },
    // Method GETS all message objects from API
    async getAllMessages() {
      const response = await fetch('http://localhost:8088/messages?_expand=user')
      const arrayOfMessageObjects = await response.json()
      this.listOfMessages = arrayOfMessageObjects
      return arrayOfMessageObjects
    },
    // Method GETS single message object from API
    async getSingleMessage(id) {
        const response = await fetch(`http://localhost:8088/messages/${id}`)
        const singleMessageArray = await response.json()
        return singleMessageArray
    },
    async UpdateMessage(id, updatedMessageObject) {
        const response = await fetch(`http://localhost:8088/messages/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedMessageObject)
        });
        const updatedMessageData = await response.json()
        return updatedMessageData
    },
    deleteMessage: (id) => {
      return fetch(`http://localhost:8088/messages/${id}`, {
        method: "DELETE"
      }).then(response => response.json())
    }
  }
  
  // Export modules
  export default messagesAPI;