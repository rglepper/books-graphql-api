import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Author } from './author.interface';
import { Model } from 'mongoose';
import { CreateAuthorInput } from './create-author.input';
import { UpdateAuthorInput } from './update-author.input';

@Injectable()
export class AuthorService {

	constructor(@InjectModel('Author') private readonly authorModel: Model<Author>)  {}


	async getAuthors(): Promise<Author[]> {
		return await this.authorModel.find().exec();
	}

	async getAuthor(id: String): Promise<Author> {
		return await this.authorModel.findById(id);
	}

	async addAuthor(newAuthor: CreateAuthorInput): Promise<Author> {
		const author = new this.authorModel(newAuthor);

		return await author.save();
	}

	async updateAuthor(id: string, changes: UpdateAuthorInput) {
		return await this.authorModel.findByIdAndUpdate(id, changes, {new: true});
	}

	  async deleteAuthor(id: string): Promise<Author> {
		return await this.authorModel.findByIdAndRemove(id);
	  }

}
