import express from 'express';
import { routes } from 'routes';

const app = express();

app.use((req, res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept ');
    res.header('Access-Control-Allow-Methord','OPTIONS, GET, POST, PUT, DELETE');
    if('OPTIONS' == req.method) {
        res.sendStatus(200);
    }else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
})


app.use(express.json());

app.use('/', routes);

app.get('/', (req, res) => {
    res.send({hello:'world'});
})

app.listen(4201, '127.0.0.1', function(){
    console.log('hi you at port 4201');
})
