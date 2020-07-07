import newsHTML from './News/newsHTML.js'
import newsListeners from './News/news.js'
import newsAPI from './News/newsAPI.js'
import newsDisplay from './News/newsDOM.js'


newsHTML.newNewsButton()
newsListeners.displayFormListener()
const activeUserId = sessionStorage.getItem('activeUser')
newsAPI.getNews(activeUserId).then(() => newsDisplay.displayNewsList(newsAPI.userNews))
.then(() => newsDisplay.toggleStyle(newsAPI.userNews))
newsListeners.deleteSelectedArticle()