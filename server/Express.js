const express = require('express');
const app = express();
const port = 3000;
const User = require('./Models/users')

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Server is working');
})

app.listen(port, ()=>{
    console.log('Running on ' + port);
})

let users = [ new User(1, "John", "Paine", "Alimente de baza"),
              new User(2, "Maria", "Banane", "Fructe si legume"),
              new User(3, "Andreea", "Conserva", "Conserve"),
              new User(4, "Andrei", "Lapte", "Lapte si alimente lactate") ,
              new User(5, "David", "Macrou", "Carne si peste")];


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