const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();

require('./models/index');
const search = require('./controllers/chatPanda');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));

app.get('/',search.data);

const PORT = 2000
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})