import { ObjectType, Field, ID } from "@nestjs/graphql";
import { BookModel } from '../book/book.model';

@ObjectType()
export class AuthorModel {
	@Field(() => ID)
	id: string;
	name: string;
	age: number;
	@Field((type) => [BookModel], {nullable: true})
	books: BookModel[];
}