import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTrackDto } from './dto/create-track.dto';
import { Track, TrackDocument } from './schemas/track.schema';


@Injectable()
export class TracksService {
  constructor(@InjectModel(Track.name) private productModel: Model<TrackDocument>) {
  }

  async getAll(): Promise<Track[]> {
    return this.productModel.find().exec()
  }

  async getById(id: string): Promise<Track> {
    return this.productModel.findById(id)
  }

  async create(productDto: CreateTrackDto): Promise<Track> {
    const newProduct = new this.productModel(productDto)
    return newProduct.save()
  }

  async remove(id: string): Promise<Track> {
    return this.productModel.findByIdAndRemove(id)
  }

  async update(id: string, productDto: CreateTrackDto): Promise<Track> {
    return this.productModel.findByIdAndUpdate(id, productDto, {new: true})
  }
}