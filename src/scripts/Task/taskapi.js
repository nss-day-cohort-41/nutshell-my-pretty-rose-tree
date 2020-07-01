// this holds all the tasks
let  allTasks = [] 
const API = {
   allTasks: () => {
       return allTasks
   },
// getting all task 
getTasks: () =>{
    return fetch("http://localhost:8088/tasks")
    .then(response => response.json())
    .then(response =>{ 
        allTasks = response
        return response
    })

},
// submitting new task
submitTask: (newTaskObject) => {
    return fetch("http://localhost:8088/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTaskObject)
    })
},

// deleting task
deleteTask: (id) => {
    return fetch(`http://localhost:8088/tasks/${id}`, {
        method: "DELETE"
    })
    .then(response => response.json())
}
}

export default API