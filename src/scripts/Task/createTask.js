// factory function for Task
const createTaskEntry = (tasks, date, userId) => {
    const newTaskEntry = {
        tasks: tasks,
        date: date,
        // parseInt return the id as a intger and not a string
        userId: parseInt(userId)
    }
    return newTaskEntry
}

export default createTaskEntry
