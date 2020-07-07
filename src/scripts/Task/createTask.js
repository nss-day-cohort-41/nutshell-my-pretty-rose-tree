// factory function for Task
const createTaskEntry = (tasks, date, userId, completed = false) => {
    const newTaskEntry = {
        tasks: tasks,
        date: date,
        // parseInt return the id as a intger and not a string
        userId: parseInt(userId),
        completed
    }
    return newTaskEntry
}

export default createTaskEntry
