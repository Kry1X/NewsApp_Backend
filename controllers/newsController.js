const NewsApi = require('newsapi');
const { User } = require('../models/models');
const { query } = require('../db');
const newsapi_key = process.env.NEWSAPI
const newsapi = new NewsApi(newsapi_key);

function filterResponse(data) {
    var news = []
    for(let i = 0; i < 100; i++) {
        let elem = data['articles'][i]
        news.push({
                source: elem["source"]["name"],
                title: elem["title"],
                description: elem["description"],
                url: elem["url"],
                imageUrl: elem["urlToImage"],
                publishedAt: elem["publishedAt"],
                content: elem["content"]
        })
    }
    return news;
    // {source: "", title: "", description: "", content: "", url: "", imageUrl: "", publishedAt: "", content; ""}
};

class NewsController {
    async getByQ(req, res) {
        const {query, language, sortby} = req.body;
        var news = [];
        newsapi.v2.everything({
            q: query,
            language: language, // ru or us, USER
            from: Date.now(),
            to: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
            sortBy: sortby || 'publishedAt',// relevancy, popularity, >publishedAt
            // searchIn: ''
        }).then(response => {
            const data = filterResponse(response);
            return res.json(data);
        });
        
    }

    async getBySoruce(req, res) { // Рещить что-то с sources; Пока что не тестировать !!!
        const {sources, language, sortby} = req.body;
        newsapi.v2.everything({
            sources: sources,
            language: language,
            from: Date.now(),
            to: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
            sortBy: sortby || 'publishedAt'
        }).then(response => {
            return res.json(response, query, language);
        });
    }

    async test(req, res) {
        res.json({message: "WORK! "})
    }
}

module.exports = new NewsController()