// this is printing  thing to the dom
// there is a checkbox and and a remove button
const makeTaskComponent = (taskList) => {
    const taskHTMLRepresentation = `<div>
      Task: ${taskList.tasks}<br>
      Compeletion Date: ${taskList.date}<br>
     UserID: ${taskList.userId}
    <div class="form-check">
    <input type="checkbox" class="form-check-input" id="taskCheck">
    <label class="form-check-label" for="checkTask">check when Complete</label>
    </div>
    <button id="deleteEntry--${task.id}">Remove</button>
  </div>`
  return taskHTMLRepresentation
}

export default makeTaskComponent 
