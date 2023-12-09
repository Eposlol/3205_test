const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer') 
const upload = multer() 
const cors = require('cors');
const data = require('./data.json');

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) 

const searchData = function({email, phone} = d) {
    return  this.filter(el => el.email === email && parseInt(phone) === el.number || el.email === email && phone === ''); 
}

let timeout;

app.post("/getData", upload.array(), (req, res) => {

   const filterItem = req.body
   const searchResult = searchData.call(data, filterItem)

    clearTimeout(timeout)
    timeout = setTimeout(()=> {res.send(JSON.stringify(searchResult))}, 1000) 
});

app.listen(5000, ()=> console.log('back is running'))