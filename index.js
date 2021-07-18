const express = require('express')
const path = require('path')
const ap = require('./public/app.js')
const app = express()
const port = 3000
app.use('/public',express.static(__dirname+  '/public')); 
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
      
    // console.log(res)
});
// app.use()

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'app.js'))
// });
app.use(express.static(__dirname + './dice'));
app.use(express.static(__dirname + 'app.js'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})