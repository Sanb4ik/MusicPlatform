import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TracksService } from './tracks.service';
import { TracksController } from './tracks.controller';
import { Track, TrackSchema } from './schemas/track.schema';

@Module({
  providers: [TracksService],
  controllers: [TracksController],
  imports: [
    MongooseModule.forFeature([
      {name: Track.name, schema: TrackSchema}
    ])
  ]
})
export class TracksModule {
}