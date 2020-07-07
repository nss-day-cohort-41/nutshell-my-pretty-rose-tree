import makeTaskComponent from "./taskToDom.js"
import API from "./taskapi.js"

const renderTasks = (tasks) => {
    // this is declearing from the article in html
    const taskArticleElement = document.querySelector(".taskLog")
    // this make sure it dosen't populate old post
    taskArticleElement.innerHTML = ""
    // this is pulling from taskToDom
    const taskArray =  API.allTasks()
    // this is filtering through the task to see if they are complete
    const incompleteTasks = taskArray.filter(task => {
        return task.completed === false
    })
    // this is itesrating through incomplete taskArray
    for(const taskObject of incompleteTasks ){
        const taskHTML = makeTaskComponent(taskObject)
        // this makes sure it prints to the dom
        taskArticleElement.innerHTML += taskHTML
    }
} 

export default renderTasks

