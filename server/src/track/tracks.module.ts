import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TracksService } from './tracks.service';
import { TracksController } from './tracks.controller';
import { Track, TrackSchema } from './schemas/track.schema';
import { FileService } from '../file/file.service';

@Module({
  providers: [TracksService, FileService],
  controllers: [TracksController],
  imports: [
    MongooseModule.forFeature([
      {name: Track.name, schema: TrackSchema}
    ])
  ]
})
export class TracksModule {
}