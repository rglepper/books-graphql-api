import { Document } from "mongoose";

export interface Book extends Document {
	name: String,
	genre: String,
	authorid: String,
}