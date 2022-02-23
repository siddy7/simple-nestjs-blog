import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './entities/post.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { User } from 'src/users/entities/user.entity';
import { PostUser } from 'src/users/entities/postUser.entity';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => [Post], { name: 'getPosts' })
  findAll() {
    return this.postsService.findAll();
  }

  @Query(() => Post, { name: 'getPost' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.postsService.findOne(id);
  }

  @ResolveField(returns => [Comment])
  comments(@Parent() post: Post): Promise<Comment[]> {
    return this.postsService.getComments(post.id);
  }

  @ResolveField(returns => PostUser)
  user(@Parent() post: Post): Promise<User> {
    return this.postsService.getUser(post.userId);
  }
}
