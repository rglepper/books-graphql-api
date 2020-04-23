import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorResolver } from './author.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorSchema } from './author.schema';
import { BookService } from '../book/book.service';
import { BookModel } from '../book/book.model';
import { BookModule } from '../book/book.module';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Author', schema: AuthorSchema}]),
    BookModule
  ],
  providers: [AuthorService, AuthorResolver, BookService, BookModel]
})
export class AuthorModule {}