import newsHTML from "./newsHTML.js";
import createNewsObj from "./createNewsObject.js";
import API from "./newsAPI.js";
import newsDisplay from "./newsDOM.js";

const newsListeners = {
    displayFormListener() {
        const createNewsButton = document.getElementById('createNewsButton')

        createNewsButton.addEventListener('click', event => {
        newsHTML.newsInputField()
        this.createNewsListener()
        })
    },
    createNewsListener() {
        const submitNewsButton = document.getElementById('submitNewNews')

        submitNewsButton.addEventListener('click', event => {
        event.preventDefault()

        const newNewsNameValue = document.getElementById('newNewsName').value
        const newNewsDateValue = document.getElementById('newNewsDate').value
        const newNewsAddressValue = document.getElementById('newNewsAddress').value
        const activeUserId = sessionStorage.getItem('activeUser')
        
        if (newNewsNameValue === "" || newNewsDateValue ===  "" || newNewsAddressValue === "") {
            alert("All fields must be filled out")
        } else {
            const newNewsObj = createNewsObj(activeUserId, newNewsNameValue, newNewsDateValue, newNewsAddressValue)

            API.saveNews(newNewsObj)
            .then(() => API.getNews(activeUserId))
            .then(response => {
            newsDisplay.displayNewsList(response)
            document.getElementById('newsFormEntry').reset()
            })
        }
        })
    },
    deleteSelectedArticle() {
        const newsListElement = document.getElementById('newsList')
        const activeUserId = sessionStorage.getItem('activeUser')

        newsListElement.addEventListener('click', event => {

        if (event.target.id.startsWith('deleteArticle--')) {
            const trashNewsID = event.target.id.split('--')[1]
            
            API.deleteArticle(trashNewsID)
            .then(() => API.getNews(activeUserId))
            .then(response => newsDisplay.displayNewsList(response))
        }
        })
    }
}

export default newsListeners;