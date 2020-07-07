import newsHTML from './News/newsHTML.js'
import newsListeners from './News/news.js'
import API from './News/newsAPI.js'
import newsDisplay from './News/newsDOM.js'


newsHTML.newNewsButton()
newsListeners.displayFormListener()
const activeUserId = sessionStorage.getItem('activeUser')
API.getNews(activeUserId).then(() => newsDisplay.displayNewsList(API.userNews))
.then(() => newsDisplay.toggleStyle(API.userNews))
newsListeners.deleteSelectedArticle()