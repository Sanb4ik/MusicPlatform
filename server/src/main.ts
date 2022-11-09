import { NestFactory } from "@nestjs/core";

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {AppModule} from "./app.module";
import env = require('dotenv');
env.config();

const start = async () => {
    try {
        const port = process.env.PORT || 5000
        const app = await NestFactory.create(AppModule)
        app.enableCors();
        

        const config = new DocumentBuilder()
            .setTitle('Music Server')
            .setDescription('Documentation for Music')
            .setVersion('1.0.0')
            .addTag('will become a node developer')
            .build();
  
        const document = SwaggerModule.createDocument(app,config);
        SwaggerModule.setup('api', app, document);

        await app.listen(port,()=> console.log('listening on port '+port));
    }
    catch (e) {
        console.error(e)
    }
}
start();