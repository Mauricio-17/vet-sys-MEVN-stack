//@ts-check
import express from 'express';
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import mongoose from 'mongoose'

import clientRoute from './routes/client'
import specieRoute from './routes/specie'
import userRoute from './routes/user'
import loginRoute from './routes/login'
import mascotRoute from './routes/mascot'

const app = express();
//const uri = 'mongodb://localhost:27017/vet-sys'
// Cloud connection  
const uri = `mongodb+srv://maurice:$E2jfd32rj9Ñ@clusterone.ppklvlb.mongodb.net/?retryWrites=true&w=majority`
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
// connection to DB
mongoose.connect(uri, options).then(
    () => {
        console.log('conectado a Mongo DB')
    },
    err => {
        console.log(err)
    }
);

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api', clientRoute)
app.use('/api', specieRoute)
app.use('/api', userRoute)
app.use('/api', mascotRoute)
app.use('/api/login', loginRoute)

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
    console.log('Example app listening on port ' + app.get('port'));
});