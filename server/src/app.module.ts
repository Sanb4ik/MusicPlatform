import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TracksModule } from './track/tracks.module';
import env = require('dotenv');
env.config();

@Module({
  imports: [
    TracksModule,
    MongooseModule.forRoot(process.env.connection_uri)
  ],
})
export class AppModule {}
