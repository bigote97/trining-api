import express from 'express';
const app = express();
import morgan from 'morgan';
import router from './routes/index.js';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose'


dotenv.config()

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)


mongoose.connect(process.env.DB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('Base de datos conectada'))
.catch(error => console.log(error))

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json({
    extended: true
}));
app.use(cors());
// Routes 
app.use('/', router);

//Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});