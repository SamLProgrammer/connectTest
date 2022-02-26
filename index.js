const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
var os = require('os');

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/listen', (req,res) => {
    console.log('llegó');
})


var networkInterfaces = os.networkInterfaces();

console.log(networkInterfaces);