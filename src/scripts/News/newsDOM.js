import newsHTML from "./newsHTML.js"

const newsDisplay = {
    //Method displays news list container in DOM
    displayNewsList(arrayOfNews) {
        const newListElement = document.getElementById('newsList')
        newsListElement.innerHTML = ""
        newsListElement.innerHTML = `<h4 id="newsListTitle">Latest Articles</h4>`

        //Sorts via date
        const sortedArray = arrayOfNews.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
        })

        if (arrayOfNews == "") {
        newListElement.innerHTML += `<h5 id="noNewsMessage">No news articles found</h5>`
        } else {
        for (const newsObj of sortedArray) {
            const newHTML = newsHTML.newsConverter(newObj)
            newListElement.innerHTML += newHTML
        }
        }
    }
}

export default newsDisplay