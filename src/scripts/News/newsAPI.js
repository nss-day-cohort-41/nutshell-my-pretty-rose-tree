let activeUserArticles = []

const API = {
    async getNews(userID){
        const res = await fetch(`http://localhost:8088/news?${userID}`)
        const data = await res.json()
        this.activeUserArticles = data
        return data
        
    },

    async deleteArticle(userID) {
        const res = await fetch(`http://localhost:8088/news/${userID}`, {
          method: "DELETE"
        })
        const data = res.json()
        return data
    },
    
    async saveNews(newsObj){
        const res = await fetch(`http://localhost:8088/news`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newsObj)
        })
        const newsPost = res.json()
        return newsPost
    },
    userNews: []
}

export default API