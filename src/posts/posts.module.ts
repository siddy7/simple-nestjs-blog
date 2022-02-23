import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { HttpModule } from '@nestjs/axios';
import { CommentsService } from 'src/comments/comments.service';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [HttpModule],
  providers: [PostsResolver, PostsService, CommentsService, PrismaService, UsersService],
  exports: [PostsService]
})
export class PostsModule {}
