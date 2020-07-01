import taskName from "./Task/Tasks.js"
import messageListeners from "./Messages/messageEventListeners.js"
import createMessageObject from "./Messages/createNewMessagesObject.js"
taskName.taskForm();


messageListeners.displayListener()
createMessageObject()

