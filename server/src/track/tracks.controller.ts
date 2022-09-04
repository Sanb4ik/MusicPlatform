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
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreateTrackDto } from './dto/create-track.dto';
import { TracksService } from './tracks.service';
import { Track } from './schemas/track.schema';

@Controller('tracks')
export class TracksController {

  constructor(private trackService: TracksService) {
  }

  @Get()
  getAll(): Promise<Track[]> {
    return this.trackService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Track> {
    return this.trackService.getById(id)
  }

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

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Track> {
    return this.trackService.remove(id)
  }

  @Put(':id')
  update(@Body() updateProductDto: CreateTrackDto, @Param('id') id: string): Promise<Track> {
    return this.trackService.update(id, updateProductDto)
  }

}
