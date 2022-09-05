import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
//import { Model, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
import { FileService, FileType } from '../file/file.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { Track, TrackDocument } from './schemas/track.schema';


@Injectable()
export class TracksService {
  constructor(@InjectModel(Track.name) private trackModel: mongoose.Model<TrackDocument>,
              private fileService: FileService) {
  }

  async getAll(count= 10, offset = 0){
    return this.trackModel.find().skip(offset).limit(count);
  }

  async search(query: string): Promise<Track[]>{
    return await this.trackModel.find({
      name: {$regex: new RegExp(query, 'i')}
    });
  }

  async getById(id: string): Promise<Track> {
    return this.trackModel.findById(id)
  }


  async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
    const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
    const piturePath = this.fileService.createFile(FileType.IMAGE, picture );
   // console.log(await  this.trackModel.find({name:dto.name, artist: dto.artist }).length)
    if((await this.trackModel.find({name:dto.name, artist: dto.artist })).length <2){
      const track = await this.trackModel.create({...dto, listens: 0, audio: audioPath, picture: piturePath});
      return track.save()
    }
  }

  async remove(id: string): Promise<Track> {
    return this.trackModel.findByIdAndRemove(id)
  }

  async update(id: string, productDto: CreateTrackDto): Promise<Track> {
    return this.trackModel.findByIdAndUpdate(id, productDto, {new: true})
  }

  async listen(id: mongoose.ObjectId){
    const track = await this.trackModel.findById(id)
    track.listens += 1
    track.save()
    // this.trackModel.updateOne(this.listen, track)
  }
}