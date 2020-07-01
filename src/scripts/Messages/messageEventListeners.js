import messagesAPI from "./messageData.js";
import messageHTMLCalls from "./messagesRenderHTML.js"
import createMessageObject from "./createNewMessagesObject.js"
import updateFormFields from "./udateFormFields.js"

// HTML to load once user has logged in
const displayNewMessageButton = `
<div class="card">
<div class="card-body bg-transparent">
  <h5 class="card-title" id="cardHeader">Messages</h5>
  <div id = "displayMessages">
  </div>
  <form>
  <input type="hidden" id="hiddenMessageId" value="" />
  <div class="form-row">
    <div class="col">
        <div class="alert alert-light" role="alert" id="errorContainer"></div>
      <input type="text" class="form-control" id="messageInput" placeholder="Type a message.">
      <button type="button" id="submitMessage" class="btn btn-secondary">Submit</button>
    </div>
  </form>
</div>
</div>`;

// list of event listeners and functions to display message
const messageListeners = {
    // not really an Event listener. Function to allow HTML to display in DOM
    displayListener() {
        const messageContainer = document.querySelector("#messageContainer");
        messageContainer.innerHTML = displayNewMessageButton
        
        this.showMessages()
        this.SubmitNewMessage()
        
    },
    // function that should display all messages in database
    showMessages() {
        document.querySelector("#messageInput").innerHTML = "";
        messagesAPI.getAllMessages().then(() => messageHTMLCalls.renderMessageHTML())
    },
    // Event Listener to POST new message object so long as a message has been entered in input field
    SubmitNewMessage() {
        const submitNewButton = document.querySelector("#submitMessage")
        submitNewButton.addEventListener("click", event => {
            event.preventDefault()
            const hiddenMessageId = document.querySelector("#hiddenMessageId")
            const messageInput = document.querySelector("#messageInput")
            let userID = sessionStorage.getItem('activeUser');
            
            if(hiddenMessageId.value !== "") {
            messagesAPI.UpdateMessage(hiddenMessageId.value, createMessageObject(userID, messageInput.value))
            .then(() => {

                messagesAPI.getAllMessages().then((response) => {
                    messageHTMLCalls.renderMessageHTML(response)
                    this.clearInputs()
                })
            }) 
        } else {
                if(messageInput.value !== "" && userID !== "") {
                    const newMessage = createMessageObject(userID, messageInput.value)
                    messagesAPI.postMessage(newMessage).then(() => {
                    messagesAPI.getAllMessages().then((response) => {
                        messageHTMLCalls.renderMessageHTML(response)
                        this.clearInputs()
                    })
                })
                } else {
                    document.getElementById('errorContainer').innerHTML = `<p class="fontColor">Please enter a message.</p>`
                }
            }
       
        })
    },
    // event listeners that should allow user to edit or delete a message
    registerListener() {
        document.querySelector("#messageContainer").addEventListener("click", event => {
            if (event.target.id.startsWith("deleteMessage--")) {
                const messageToDelete = event.target.id.split("--")[1]
                messagesAPI.deleteMessage(messageToDelete)
                .then(() => this.showMessages())
            } else if (event.target.id.startsWith("editMessage--")) {
                const messagetoEdit = event.target.id.split("--")[1]
                messagesAPI.getSingleMessage(messagetoEdit)
                .then(entry => updateFormFields(entry))
            }
        })
    },
    clearInputs() {
        document.querySelector("#messageInput").value = ""
    }
}



export  default messageListeners;


