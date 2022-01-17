import express, { Application, json } from 'express';
import userRoutes from '../routes/usuario';
import cors from 'cors';

import db from '../db/connection';


class Server {

    // Attributes
    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios',
    }


    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbConnection();

        this.middlewares();

        // definir rutas
        this.routes();
    }

    // TODO: Conectar base de datos


    // Methods
    async dbConnection() {

        try {

            await db.authenticate();
            console.log('Database online MariaDB');
            
        } catch (error:any) {
            throw new Error( error );
        }
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura del body
        this.app.use(express.json());

        // Public folder
        this.app.use(express.static('public'));

    }

    routes() {

        this.app.use(this.apiPaths.usuarios, userRoutes)
        
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Server listening on http://localhost:${this.port} TSC!`);
        })
    }
}


export default Server;