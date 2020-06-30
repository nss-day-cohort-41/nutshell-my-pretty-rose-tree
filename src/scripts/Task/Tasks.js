const taskName = {
taskForm: () => {
    // posting to the dom
    document.querySelector(".taskForm").innerHTML = `
    <form>
        <input type="hidden" id="task" value="">
        <div class="form-group">
        <label for="task">Task</label>
        <input type="text" class="form-control" id="taskEntry" placeholder="enter task">
        <small id="task"
        </div>
        <div class="form-group">
        <label for="taskDate">Completion Date</label>
        <input type="date" class="form-control" id="taskDate" placeholder="enter date">
        </div>
        <button type="submit" id="taskSubmit" class="btn btn-secondary">Submit</button>
  </form>`
}
}

export default taskName




