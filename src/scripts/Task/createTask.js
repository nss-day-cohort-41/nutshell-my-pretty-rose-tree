// factory function for Task
const createTaskEntry = (task, date, userId) => {
    const newTaskEntry = {
        task: task,
        date: date,
        userId: userId
    }
    return newTaskEntry
}

export default createTaskEntry
