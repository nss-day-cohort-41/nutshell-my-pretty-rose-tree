import messagesAPI from "./messageData.js"
import messageListeners from "./messageEventListeners.js"
// HTML to populate when new message has been POSTed and function to render it to DOM
const messageHTMLCalls = {
    messageList(messageObject) {
        return `
        <div class="card" id="messageId--${messageObject.id}">
        <div class="card-body bg-transparent">
          <h6 class="card-title">${messageObject.user.username}</h6>
          <p id="messageEntry" class="card-text">${messageObject.message}</p>
          ${ 
              messageObject.userId === parseInt(sessionStorage.getItem('activeUser')) ? `
          <button type="button" id="editMessage--${messageObject.id}" class="btn btn-secondary">Edit</button>
          <button type="button" id ="deleteMessage--${messageObject.id}" class="btn btn-secondary">Delete</button>` : ""
          }
        </div>
      </div>`
    },
    renderMessageHTML() {
        const displayMessages = document.getElementById('displayMessages');
        displayMessages.innerHTML = "";
        for(const message of messagesAPI.listOfMessages) {
            const messageHTML = this.messageList(message)
            displayMessages.innerHTML += messageHTML
            messageListeners.clearInputs()
        }
        messageListeners.registerListener()
        
        displayMessages.scrollTop = 9999999999;
    }
}



export default messageHTMLCalls;