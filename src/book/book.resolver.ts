import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { BookService } from './book.service';
import { Book } from './book.interface';
import { BookModel } from './book.model';

@Resolver('Book')
export class BookResolver {
	constructor(
		private readonly bookService: BookService
	) { }

	@Query(() => [BookModel])
	async getBooks(): Promise<Book[]> {
		return await this.bookService.findAllBooks();
	}

}
