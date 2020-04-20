import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { AuthorModel } from './author.model';
import { CreateAuthorInput } from './create-author.input';
import { Author } from './author.interface';

@Resolver('Author')
export class AuthorResolver {
	constructor(private readonly authorService: AuthorService) {}

	@Query(() => [AuthorModel])
	authors() {
		return this.authorService.getAuthors();
	}

	@Mutation(() => AuthorModel)
	async createAuthor(@Args('authorData') authorData: CreateAuthorInput): Promise<Author> {
		return this.authorService.addAuthor(authorData)
	}
}
