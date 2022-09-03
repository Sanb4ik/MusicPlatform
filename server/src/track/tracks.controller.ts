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
} from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { TracksService } from './tracks.service';
import { Track } from './schemas/track.schema';

@Controller('tracks')
export class TracksController {

  constructor(private readonly productsService: TracksService) {
  }

  @Get()
  getAll(): Promise<Track[]> {
    return this.productsService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Track> {
    return this.productsService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreateTrackDto): Promise<Track> {
    return this.productsService.create(createProductDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Track> {
    return this.productsService.remove(id)
  }

  @Put(':id')
  update(@Body() updateProductDto: CreateTrackDto, @Param('id') id: string): Promise<Track> {
    return this.productsService.update(id, updateProductDto)
  }

}
