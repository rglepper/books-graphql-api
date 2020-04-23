import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './book.interface';

@Injectable()
export class BookService {
	constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

	async findAllBooks(): Promise<Book[]> {
		return await this.bookModel.find().exec();
	}
	async findAllByAuthor(authorId: String): Promise<Book[]> {
		return await this.bookModel.find({authorid: authorId}).exec();
	}
}
