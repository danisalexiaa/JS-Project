const express = require('express');
const app = express();
const port = 3000;


app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Server is working');
})

app.listen(port, ()=>{
    console.log('Running on ' + port);
})
