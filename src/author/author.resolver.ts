import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { AuthorModel } from './author.model';
import { AuthorInput } from './author.input';
import { Author } from './author.interface';

@Resolver('Author')
export class AuthorResolver {
	constructor(private readonly authorService: AuthorService) {}

	@Query(() => [AuthorModel])
	authors() {
		return this.authorService.getAuthors();
	}

	@Mutation(returns => AuthorModel)
	async createAuthor(@Args('authorData') authorData: AuthorInput): Promise<Author> {
		return this.authorService.addAuthor(authorData)
	}
}
