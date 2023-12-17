const express = require('express');
const { PORT , mongoDBURL } = require('./config.js');
const {Book} = require('./models/bookModel.js');
const { default: mongoose } = require('mongoose');
const booksRoute = require('./routes/bookRoute.js'); 
const cors = require('cors');


const app = express();
app.use(express.json());

app.use(cors());

app.get("/",(request,response)=>{
    console.log(request);
    return response.status(234).send("Welcome")
})

app.use('/books',booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log("DB Connected");
        app.listen(PORT , ()=>{
            console.log(`server running on port : ${PORT}`)
        });
    })
    .catch((error)=>{
        console.log(error);
    })
