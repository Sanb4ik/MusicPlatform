import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FileService, FileType } from '../file/file.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { Track, TrackDocument } from './schemas/track.schema';


@Injectable()
export class TracksService {
  constructor(@InjectModel(Track.name) private TrackModel: Model<TrackDocument>,
              private fileService: FileService) {
  }

  async getAll(): Promise<Track[]> {
    return this.TrackModel.find().exec()
  }

  async getById(id: string): Promise<Track> {
    return this.TrackModel.findById(id)
  }


  async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
    const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
    const piturePath = this.fileService.createFile(FileType.IMAGE, picture );
    const track = await this.TrackModel.create({...dto, listens: 0, audio: audioPath, picture: piturePath});
    return track.save()
  }

  async remove(id: string): Promise<Track> {
    return this.TrackModel.findByIdAndRemove(id)
  }

  async update(id: string, productDto: CreateTrackDto): Promise<Track> {
    return this.TrackModel.findByIdAndUpdate(id, productDto, {new: true})
  }
}