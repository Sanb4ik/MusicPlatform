import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import env = require('dotenv');
import { TracksModule } from './track/tracks.module';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

env.config();

@Module({
  imports: [
    FileModule,
    TracksModule,
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot(process.env.connection_uri)
  ],
})
export class AppModule {}
