import taskName from "./Task/Tasks.js"
import eventListener from "./Task/taskEventListeners.js"
import renderTasks from "./Task/taskList.js";
import API from "./Task/taskapi.js"

taskName.taskForm();
eventListener();

// test to render task
API.getTasks()
.then(response => {
    renderTasks(response)
})





