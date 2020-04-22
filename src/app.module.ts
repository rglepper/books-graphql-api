import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';

@Module({
  imports: [GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }),
  MongooseModule.forRoot('mongodb://graphql-playlist:test123@ds259410.mlab.com:59410/books', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }),
    AuthorModule,
    BookModule
  ],
  providers: [AppService],
})
export class AppModule { }
