// this is printing  thing to the dom
// there is a checkbox and and a remove button
const makeTaskComponent = (taskList) => {
    const taskHTMLRepresentation = `<div>
      Task: ${taskList.tasks}<br>
      Compeletion Date: ${taskList.date}<br>
     UserID: ${taskList.userId}
    <div>
    <input type="checkbox"  id="checkTask">
    <label  for="checkTask">check when Complete</label>
    </div>
    <button id="deleteTask--${taskList.id}">Remove</button>
  </div>`
  return taskHTMLRepresentation
}

export default makeTaskComponent 
