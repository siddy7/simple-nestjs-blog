import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Comment } from 'src/comments/entities/comment.entity';

@ObjectType()
export class Post {
  userId: number;

  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  body: String;

  @Field(type => [Comment])
  comments: Comment[]
}
