import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorResolver } from './author.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorSchema } from './author.schema';
import { BookService } from '../book/book.service';
import { BookModule } from '../book/book.module';
import { BookModel } from '../book/book.model';
import { BookSchema } from '../book/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Author', schema: AuthorSchema},{name: 'Book', schema: BookSchema}]),
    BookModule
  ],
  providers: [AuthorService, AuthorResolver, BookService, BookModel]
})
export class AuthorModule {}