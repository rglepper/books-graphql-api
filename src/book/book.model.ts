import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class BookModel {
	@Field(() => ID)
	id: string;
	name: string;
	genre: string;
	authorid: string;
}