const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
    }


    middlewares() {
        //CORS
        this.app.use( cors() );

        //Lectura y <parseo del body
        this.app.use( bodyParser.json() );
        this.app.use(bodyParser.urlencoded({ extended: false }));
        

        //Pagina publica
        this.app.use( express.static('public') );
    }

    routes(){

        this.app.use('/api/users',require('../routes/users'));

    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log(`Server listening port ${ this.port }`)
        })
    }
}


module.exports = Server;