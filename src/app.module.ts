import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [AuthorModule],
  providers: [AppService],
})
export class AppModule {}
