import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class PostUser {
@Field()
  name: string;

  @Field()
  username: string
  
  @Field()
  email: string;
}