import { Module, forwardRef } from '@nestjs/common';
import { BookService } from './book.service';
import { BookResolver } from './book.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './book.schema';
import { AuthorModule } from '../author/author.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }]),
    forwardRef(() => AuthorModule),
  ],
  providers: [BookService, BookResolver],
  exports: [
    MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }]),
    BookService,
  ],
})
export class BookModule {}
