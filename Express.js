const express = require('express');
const app = express();
const port = 3000;
const User = require('/.Users')

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Server is working');
})

app.listen(port, ()=>{
    console.log('Running on ' + port);
})
a
let users = [ new users(1, "John", "Paine", "Alimente de baza"),
              new users(2, "Maria", "Banane", "Fructe si legume"),
              new users(3, "Andreea", "Conserva", "Conserve"),
              new users(4, "Andrei", "Lapte", "Lapte si alimente lactate") ,
              new users(5, "David", "Macrou", "Carne si peste")];


app.post('/addUsers', (req, res)=>{
    if(req.body.name != "" && req.body.product != "" && req.body.category != "" && req.body.id>=0 && typeof req.body.name === "string" && typeof req.body.product ==="string" && typeof req.body.category === "string" && typeof req.body.id === "number"){
    let newUser = new users(req.body.id, 
        req.body.name, 
        req.body.product, 
        req.body.category);

        users.push(newUser);
        console.log(users);
        return res.json(newUser);
    }
    else{
        return res.send("eroare");
    }
})
