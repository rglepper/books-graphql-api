import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { BookService } from './book.service';
import { Book } from './book.interface';
import { BookModel } from './book.model';
import { AuthorService } from '../author/author.service';
import { AuthorModel } from '../author/author.model';

@Resolver(of => BookModel)
export class BookResolver {
	constructor(
		private readonly bookService: BookService,
		private readonly authorService: AuthorService
	) { }

	@Query(() => [BookModel], {name: 'books'})
	async getBooks(): Promise<Book[]> {
		return await this.bookService.findAllBooks();
	}

	@ResolveField('author', returns => AuthorModel)
	async findAuthor(@Parent() book: BookModel) {
		return await this.authorService.getAuthor(book.authorid);
	}

}
