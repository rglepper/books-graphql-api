import * as mongoose from "mongoose";

export const BookSchema = new mongoose.Schema({
	name: String,
	genre: String,
	authorid: String,
})
