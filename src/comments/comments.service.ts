import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { response } from 'express';
import { lastValueFrom, map } from 'rxjs';
import { Post } from 'src/posts/entities/post.entity';
import { PostsService } from 'src/posts/posts.service';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(private httpService: HttpService) {}

  findAll(): Promise<Comment[]> {
    return lastValueFrom(this.httpService.get("https://jsonplaceholder.typicode.com/comments").pipe(
      map(response => response.data)
    ));
  }

  findOne(id: number): Promise<Comment> {
    return lastValueFrom(this.httpService.get("https://jsonplaceholder.typicode.com/comments").pipe(
      map(response => response.data.find(comment => comment.id === id))
    ));
  }

  findByPostId(postId: number): Promise<Comment[]> {
    const response =  lastValueFrom(this.httpService.get("https://jsonplaceholder.typicode.com/comments").pipe(
      map(response => response.data.filter(comment => comment.postId === postId))
    ));
    return response
  }
}
