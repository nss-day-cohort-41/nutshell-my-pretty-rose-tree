import taskName from "./Task/Tasks.js"
import eventListener from "./Task/taskEventListeners.js"
import renderTasks from "./Task/taskList.js";
import API from "./Task/taskapi.js"

// calling taskForm
taskName.taskForm();
// calling event listeners
eventListener();
// this makes tasks post to the dom. I am saying get all task and render to the dom
API.getTasks().then((response) => {
    renderTasks(response)
})







