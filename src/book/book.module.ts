import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookResolver } from './book.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './book.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Book', schema: BookSchema}])],
  providers: [BookService, BookResolver],
  exports: [MongooseModule.forFeature([{name: 'Book', schema: BookSchema}])]
})
export class BookModule {}
