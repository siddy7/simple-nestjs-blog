import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Comment {
  @Field(() => Int)
  postId: number;

  @Field(() => Int)
  id: number;

  @Field()
  name: string
  
  @Field()
  email: string

  @Field()
  body: string
}
