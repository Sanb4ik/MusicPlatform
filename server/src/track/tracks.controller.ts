import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UploadedFiles,
  UseInterceptors,
  Query
} from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreateTrackDto } from './dto/create-track.dto';
import { TracksService } from './tracks.service';
import { Track } from './schemas/track.schema';
import { ObjectId } from 'mongoose';


@ApiTags('Tracks')
@Controller('tracks')
export class TracksController {

  constructor(private trackService: TracksService) {
  }

  @ApiOperation({summary: 'get all tracks'})
  @ApiResponse({status: 200, type: [CreateTrackDto]})
  @Get()
  getAll(@Query('count') count: number,
        @Query('offset') offset: number) {
    return this.trackService.getAll(count, offset)
  }

  @ApiOperation({summary: 'find track by words or song name'})
  @ApiResponse({status: 200, type: [CreateTrackDto]})
  @Get('/search')
  search(@Query('query') query: string) {
    return this.trackService.search(query)
  }

  @ApiOperation({summary: 'find one track by id'})
  @ApiResponse({status: 200, type: CreateTrackDto})
  @Get(':id')
  getOne(@Param('id') id: string): Promise<Track> {
    return this.trackService.getById(id)
  }

  @ApiOperation({summary: 'upload files image and audio'})
  @ApiResponse({status: 200, type: Track})
  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'audio', maxCount: 1 },
    { name: 'picture', maxCount: 1 },
  ]))
  create(@UploadedFiles() 
    files: {
      audio?: Express.Multer.File[],
      picture?: Express.Multer.File[] },
    @Body() dto: CreateTrackDto): Promise<Track> {
      const {picture, audio} = files;
            return this.trackService.create(dto, picture[0], audio[0])
  }

  @ApiOperation({summary: 'get number of listens by track id'})
  @ApiResponse({status: 200, type: Number})
  @Post('/listen/:id')
  listen(@Param('id') id: ObjectId){
    return this.trackService.listen(id)
  }

  @ApiOperation({summary: 'delete track by id'})
  @ApiResponse({status: 200, type: Number})
  @Delete(':id')
  remove(@Param('id') id: string): Promise<Track> {
    return this.trackService.remove(id)
  }

  @ApiOperation({summary: 'update track by id'})
  @ApiResponse({status: 200, type: Track})
  @Put(':id')
  update(@Body() updateTrackDto: CreateTrackDto, @Param('id') id: string): Promise<Track> {
    return this.trackService.update(id, updateTrackDto)
  }

}
