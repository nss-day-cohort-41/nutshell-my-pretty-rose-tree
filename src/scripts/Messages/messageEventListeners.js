import messagesAPI from "./messageData.js";
import messageHTMLCalls from "./messagesRenderHTML.js"
import createMessageObject from "./createNewMessagesObject.js"
import updateFormFields from "./udateFormFields.js"


const displayNewMessageButton = `
<div class="card">
<div class="card-body bg-transparent">
  <h5 class="card-title">Messages</h5>
  <div id = "displayMessages">
  </div>
  <form>
  <input type="hidden" id="hiddenMessageId" value="" />
  <div class="form-row">
    <div class="col">
        <div class="alert alert-danger" role="alert" id="errorContainer"></div>
      <input type="text" class="form-control" id="messageInput" placeholder="Type a message.">
      <button type="button" id="submitMessage" class="btn btn-secondary">Submit</button>
    </div>
  </form>
</div>
</div>`;
let displayMessage = document.querySelector('#displayMessages');


const messageListeners = {
    displayListener() {
        const messageContainer = document.querySelector("#messageContainer");
        messageContainer.innerHTML = displayNewMessageButton
    },
    showMessages() {
        document.querySelector("#messageInput").innerHTML = "";
        messagesAPI.getAllMessages().then(() => messageHTMLCalls.renderMessageHTML())
    },
    SubmitNewMessage() {
        const submitNewButton = document.querySelector("#submitMessage")
        submitNewButton.addEventListener("click", event => {
            const hiddenMessageId = document.querySelector("#hiddenMessageId")
            const messageInput = document.querySelector("#messageInput")
            let userID = sessionStorage.getItem('activeUser');
            
            if(hiddenMessageId.value !== "") {
            messagesAPI.UpdateMessage(hiddenMessageId.value, createMessageObject(userID, messageInput.value))
            .then(() => {
                messagesAPI.getAllMessages().then((response) => {
                    messageHTMLCalls.renderMessageHTML(response)
                })
            }) 
        } else {
                if(messageInput.value !== "" && userID !== "") {
                    const newMessage = createMessageObject(userID, messageInput.value)
                    messagesAPI.postMessage(newMessage)
                } else {
                    document.getElementById('errorContainer').innerHTML = "The username or password is incorrect"
                }
            }
       
        })
    },
    registerListeners() {
        const messageEditContainer = document.querySelector("#displayMessages")
        messageEditContainer.addEventListener("click", event => {
            if(event.target.id.startswith("editMessage--")) {
                const messagetoEdit = event.target.id.split("--")[1]
                messagesAPI.getSingleMessage(messagetoEdit)
                .then(entry => updateFormFields(entry))
            } else if(event.target.id.startswith("deleteMessage--")) {
                const messageToDelete = event.target.id.split("--")[1]
                messagesAPI.deleteMessage(messageToDelete)
                .then(this.showMessages())
            }
        })
    }


}



export  default messageListeners;



