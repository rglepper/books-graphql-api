import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Author } from './author.interface';
import { Model } from 'mongoose';

@Injectable()
export class AuthorService {

	constructor(@InjectModel('Author') private readonly authorModel: Model<Author>)  {}


	async getAuthors(): Promise<Author[]> {
		return await this.authorModel.find().exec();
	}
}
