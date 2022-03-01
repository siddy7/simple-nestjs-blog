import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { lastValueFrom, map } from 'rxjs';
import { CommentsService } from 'src/comments/comments.service';
import { Comment } from 'src/comments/entities/comment.entity';
import { UsersService } from 'src/users/users.service';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(private httpService: HttpService, private usersService: UsersService, private commentsService: CommentsService) {}

  findAll(): Promise<Post[]> {
    return lastValueFrom(this.httpService.get("https://jsonplaceholder.typicode.com/posts").pipe(
      map(response => response.data)
    ));
  }

  findOne(id: number): Promise<Post> {
    return lastValueFrom(this.httpService.get("https://jsonplaceholder.typicode.com/posts/" + id).pipe(
      map(response => response.data)
    ));
  }

  getComments(postId: number): Promise<Comment[]> {
    return this.commentsService.findByPostId(postId);
  }

  getUser(userId: number): Promise<User> {
    return this.usersService.findOne(userId);
  }
}
