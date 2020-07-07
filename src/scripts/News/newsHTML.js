const newsHTML = {
    //this is the input form used to create another news article
    newsInputField (newsItem) {
        const html =
                `<!-- SECTION FOR CREATING NEW ARTICLE -->
                <div class="newsForm">
                <form id="newsFormEntry">
                <div class="form-group">
                    <label for="newNewsName">News Article Name</label>
                    <input type="text" class="form-control" id="newNewsName" placeholder="enter news article's name">
                </div>
                <div class="form-group">
                    <label for="newNewsDate">Date</label>
                    <input type="date" class="form-control" id="newNewsDate">
                </div>
                <div class="form-group">
                    <label for="newNewsAddress">News Address</label>
                    <input type="text" class="form-control" id="newNewsAddress" placeholder="ex. 1234 Main St, New York, NY 10005">
                </div>
                <button type="submit" class="btn btn-secondary" id="submitNewNews">Submit News</button>
                </form>
                </div>`
            return html
    },
    //this is the method that will convert an item from that user's news list to its html component
    newsConverter (newsItem) {
        if(newsItem.userId == window.sessionStorage.activeUser){
            const newsHTML = 
            `<div class="card text-center">
                <div class="card-header"></div>
                <div class="card-body">
                    <h5 class="card-title">${newsItem.title}</h5>
                    <p class="card-text">${newsItem.synopsis}</p>
                    <a href="http://${newsItem.url}" class="btn btn-dark">URL</a>
                    <button type="button" class="btn btn-secondary" id="deleteEvent--${eventObj.id}">Delete Event</button>
                </div>
            </div>`
                return newsHTML
            }
            //This would be theoretically used for posting friend's news articles to the user's dashboard
        // }else{
        //     const newsHTML = 
        //     `<div class="card text-center">
        //         <div class="card-header"></div>
        //         <div class="card-body-friend">
        //             <h5 class="card-title">${newsItem.title}</h5>
        //             <p class="card-text">${newsItem.synopsis}</p>
        //             <a href="http://${newsItem.url}" class="btn btn-dark">URL</a>
        //             <button type="button" class="btn btn-secondary" id="deleteEvent--${eventObj.id}">Delete Event</button>
        //         </div>
        //     </div>`

        //         return newsHTML
        // }      
    },
    newNewsButton() {
        //this creates the html for the button that would render the input form when clicked
        const newsContainer = document.getElementById('newsContainer')
        const newsHtmlButton = `
        <div class="newsButton">
            <button type="button" class="btn btn-secondary" id="createNewsButton">Create an news article</button>
        </div>
        `
        newsContainer.innerHTML = newsHtmlButton
  },
}

export default newsHTML