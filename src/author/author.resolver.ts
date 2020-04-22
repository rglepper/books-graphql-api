import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { AuthorModel } from './author.model';
import { CreateAuthorInput } from './create-author.input';
import { Author } from './author.interface';
import { UpdateAuthorInput } from './update-author.input';
import { BookService } from '../book/book.service';

@Resolver('Author')
export class AuthorResolver {
	constructor(
		private readonly authorService: AuthorService,
		private readonly bookService: BookService) {}

	@Query(() => [AuthorModel])
	authors() {
		return this.authorService.getAuthors();
	}

	@Mutation(() => AuthorModel)
	async createAuthor(@Args('authorData') authorData: CreateAuthorInput): Promise<Author> {
		return this.authorService.addAuthor(authorData)
	}

	@Mutation(() => AuthorModel)
	async updateAuthor(
		@Args('id') id:string,
		@Args('changes') changes:UpdateAuthorInput,
	): Promise<Author> {
		return await this.authorService.updateAuthor(id,changes);
	}
}
