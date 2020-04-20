import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class AuthorInput {
	@Field()
	name: string;
	age: number;
}