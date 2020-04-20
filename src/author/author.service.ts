import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Author } from './author.interface';
import { Model } from 'mongoose';

@Injectable()
export class AuthorService {

	constructor(@InjectModel('Author') private readonly authorModel: Model<Author>)  {}

	async getAuthors() {
		return [
			{
			  "name": "John Kennedy Toole",
			  "age": 32,
			  "id": "5e5f89565b2f756a6d27b6c9"
			},
			{
			  "name": "Gabriel Garcia Marquez",
			  "age": 88,
			  "id": "5e5f89565b2f756a6d27b6ca"
			},
			{
			  "name": "Eduardo Mendoza",
			  "age": 78,
			  "id": "5e5f89565b2f756a6d27b6cb"
			}
		  ];
	}
}
