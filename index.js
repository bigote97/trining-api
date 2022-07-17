import express from 'express';
const app = express();
import morgan from 'morgan';
import router from './routes/index.js';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config()

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

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