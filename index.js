const express = require ('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const routes = require('./route');
routes(app);

app.listen(port, () => console.log(`example app listening on port ${port}!`))