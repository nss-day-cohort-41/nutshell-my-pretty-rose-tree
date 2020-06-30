const taskName = {
taskForm: () => {
    document.querySelector(".taskForm").innerHTML = `
    <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Task</label>
      <input type="task" class="form-control" id="task" aria-describedby="" placeholder="enter task">
      <small id="task"
    </div>
    <div class="form-group">
      <label for="taskDate">Date to be complete</label>
      <input type="taskDate" class="form-control" id="taskDate" placeholder="enter date">
    </div>

    <button type="taskSubmit" class="btn btn-dark">Submit</button>
  </form>`
}
}

export default taskName




