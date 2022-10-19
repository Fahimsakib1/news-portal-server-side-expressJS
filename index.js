const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./Data/Categories.json');
const news = require('./Data/News.json');

app.get('/', (req, res) => {
    res.send('News API Running');
});

app.get('/news-categories', (req, res) => {
    res.send(categories);
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.params.id)
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
})

app.get('/news', (req, res) => {
    res.send(news);
})


app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(news)
    }
    else {
        const selectedCategoryNews = news.filter(n => n.category_id === id);
        res.send(selectedCategoryNews);
    }


})

app.listen(port, () => {
    console.log("News Portal Server is Running on Port", port);
})
