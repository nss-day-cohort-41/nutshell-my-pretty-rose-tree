import makeTaskComponent from "./taskToDom.js"
import API from "./taskapi.js"

const renderTasks = (tasks) => {
    // this is declearing from the article in html
    const taskArticleElement = document.querySelector(".taskLog")
    // this make sure it dosen't populate old post
    taskArticleElement.innerHTML = ""
    // this is pulling from taskToDom
    const taskArray =  API.allTasks()
    for(const taskObject of taskArray ){
        const taskHTML = makeTaskComponent(taskObject)
        // this makes sure it prints to the dom
        taskArticleElement.innerHTML += taskHTML
    }
} 

export default renderTasks

