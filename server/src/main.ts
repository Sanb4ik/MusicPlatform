import { NestFactory } from "@nestjs/core";
import {AppModule} from "./app.module";
import env = require('dotenv');
env.config();

const start = async () => {
    try {
        const port = process.env.PORT || 5000
        const app = await NestFactory.create(AppModule)
        app.enableCors();
        await app.listen(port,()=> console.log('listening on port '+port));
    }
    catch (e) {
        console.error(e)
    }
}
start();