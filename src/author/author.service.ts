import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Author } from './author.interface';
import { Model } from 'mongoose';
import { AuthorInput } from './author.input';

@Injectable()
export class AuthorService {

	constructor(@InjectModel('Author') private readonly authorModel: Model<Author>)  {}


	async getAuthors(): Promise<Author[]> {
		return await this.authorModel.find().exec();
	}

	async addAuthor(newAuthor: AuthorInput): Promise<Author> {
		const author = new this.authorModel(newAuthor);

		return await author.save();
	}
}
