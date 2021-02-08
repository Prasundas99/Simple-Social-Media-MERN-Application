import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';

import postroutes from './routes/posts.js';

const app = express();
app.use(cors());



app.use(express.json({ limit: "30mb", extended: true}));

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));

app.use(morgan("dev"));



app.use('/posts', postroutes);

//Database
const CONNECTION_URL = "mongodb+srv://user1:user1@cluster0.nn5xt.mongodb.net/memories?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then( () =>{
 app.listen(PORT, ()=> console.log(`Server is listening on port ${PORT} and DB is connected`))
})
.catch( (error)=>{ console.log(error)
});


mongoose.set('useFindAndModify', false );
