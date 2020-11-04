import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import userRoutes from './routes/user.routes';
import { createConnection }from 'typeorm';

const PORT = process.env.PORT || 3000;

createConnection()
    .then( async () => {

        // create express app
        const app = express();

        // Middlewares
        app.use(cors());
        app.use(helmet());
    
        app.use(express.json());
        // Routes
        app.use('/',userRoutes);
    
        // start express server
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
      
    })
    .catch(error => console.log(error));

