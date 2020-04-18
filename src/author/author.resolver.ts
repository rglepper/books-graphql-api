import { Resolver, Query } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { AuthorModel } from './author.model';

@Resolver('Author')
export class AuthorResolver {
	constructor(private readonly authorService: AuthorService) {}

	@Query(() => [AuthorModel])
	authors() {
		return this.authorService.getAuthors();
	}
}
