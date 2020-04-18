import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class AuthorModel {
	@Field(() => ID)
	id: string;
	name: string;
	age: number;
}