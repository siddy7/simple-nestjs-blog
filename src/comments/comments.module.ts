import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsResolver } from './comments.resolver';
import { HttpModule } from '@nestjs/axios';
import { PostsService } from 'src/posts/posts.service';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [HttpModule],
  providers: [CommentsResolver, CommentsService, PrismaService, UsersService],
  exports: [CommentsService]
})
export class CommentsModule {}
