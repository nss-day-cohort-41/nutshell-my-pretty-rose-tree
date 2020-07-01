import taskName from "./Task/Tasks.js"
import submitListener from "./Task/taskEventListeners.js"
import renderTasks from "./Task/taskList.js";
import API from "./Task/taskapi.js"

taskName.taskForm();
submitListener()
// test to render task

API.getTasks()
.then(response => {
    renderTasks(response)
})





