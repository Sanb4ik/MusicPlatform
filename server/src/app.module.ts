import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import env = require('dotenv');
import { TracksModule } from './track/tracks.module';
import { FileModule } from './file/file.module';

env.config();

@Module({
  imports: [
    FileModule,
    TracksModule,
    MongooseModule.forRoot(process.env.connection_uri)
  ],
})
export class AppModule {}
