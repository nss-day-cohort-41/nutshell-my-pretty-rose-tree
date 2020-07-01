import messagesAPI from "./messageData.js"
import messageListeners from "./messageEventListeners.js"

const messageHTMLCalls = {
    messageList(messageObject) {
        return `
        <div class="card" id="messageId--${messageEntry.id}">
        <div class="card-body">
          <h6 class="card-title">${messageObject.userId}</h6>
          <button type="button" class="btn btn-secondary">Add as Friend</button>
          <p id="messageEntry" class="card-text">${messageObject.message}</p>
          <button type="button" id="editMessage--${messageObject.id}" class="btn btn-secondary">Edit</button>
          <button type="button" id ="deleteMessage--${messageObject.id}" class="btn btn-secondary">Delete</button>
        </div>
      </div>`
    },
    renderMessageHTML() {
        const displayMessages = document.getElementById('displayMessages');
        displayMessages.innerHTML = "";
        for(const message of messagesAPI.listOfMessages) {
            const messageHTML = this.messageList(message)
            displayMessages.innerHTML += messageHTML
        }
        
    }
}



export default messageHTMLCalls;