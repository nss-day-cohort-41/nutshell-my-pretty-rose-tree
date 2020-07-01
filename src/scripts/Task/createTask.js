// factory function for Task
const createTaskEntry = (tasks, date, userId) => {
    const newTaskEntry = {
        tasks: tasks,
        date: date,
        userId: parseInt(userId)
    }
    return newTaskEntry
}

export default createTaskEntry
