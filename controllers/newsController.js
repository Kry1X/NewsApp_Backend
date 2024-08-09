const NewsApi = require('newsapi');
const { Publisher, User } = require('../models/models');
const { query } = require('../db');

const newsapi_key = process.env.NEWSAPI
const newsapi = new NewsApi(newsapi_key);

/*
TODO: 
Доделать getLatest
*/

class NewsController {
    async getLatest(req, res) {
        const {query, language} = req.body
        newsapi.v2.everything({
            q: query,
            language: language, // ru or us, USER
            page: 5,
            pageSize: 10,
            from: Date.now(),
            to: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
        }).then(response => {
            return res.json(response, query, language);
        });
    }

    async getByDate(req, res) {
        const {query, language, date} = req.body
        if(date >= new Date(Date.now - 29*24*60*1000)) {
            return res.json({message: "News release date exceeded"})
        }
        newsapi.v2.everything({
            q: query,
            language: language, // ru or us
            page: 5,
            pageSize: 10,
            from: date,
            to: date    
        }).then(response => {
            return res.json(response);
        });
    }

    async getByPublisher(req, res) {return undefined;
        // const publish_id = User.
        // const {query, language} = req.params
        // newsapi.v2.everything({
        //     q: query,
        //     language: language, // ru or us
        //     page: 5,
        //     pageSize: 10 ,
        //     domains:  // domains=techcrunch.com,thenextweb.com
        // }).then(response => {
        //     return res.json(response);
        // });
        
    }

    async createPublisher(req, res) {
        const {name, link} = req.body;
        const pub = Publisher.create({name, link})
        returnres.json(pub)
    }

    async test(req, res) {
        newsapi.v2.everything({
            country: 'ru',
            category: 'general'
          }).then(response => {
            res.json(response);
          });
    }
}

module.exports = new NewsController()