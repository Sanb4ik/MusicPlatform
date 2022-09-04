import { Module } from '@nestjs/common';
import { FileService } from './file.service';

@Module({
    //controllers: [FileController],
    providers: [FileService],
})
export class FileModule {};