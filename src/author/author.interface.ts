import { Document } from "mongoose";

export interface Author extends Document {
	name: string;
	age: number;
}
