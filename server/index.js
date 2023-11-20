const express = require('express');
const path = require('path');
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;
const indexPath = path.resolve(__dirname, '..', 'build', 'index.html');
const axios = require('axios');

// static resources should just be served as they are
app.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));

app.listen(PORT, (error) => {
    if (error) {
        return console.log('Error during app startup', error);
    }
    console.log("listening on " + PORT + "...");
});

app.get('/*', async (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
        console.log(req)
         axios.get('https://jsonplaceholder.typicode.com/posts/1').then((r) => {
            console.log(r.data)
            htmlData = htmlData.replace(
                "<title>React App</title>",
                `<title>CONGSSR</title>`
            )
                .replace('__META_OG_TITLE__', r.data.title)
                .replace('__META_OG_DESCRIPTION__', r.data.title)
                .replace('__META_DESCRIPTION__', r.data.title)
                .replace('__META_OG_IMAGE__', r.data.title)
            return res.send(htmlData);
        });
    });
});