import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  username: string
  
  @Field()
  email: string;

  @Field()
  address_street: string;

  @Field()
  address_suite: string;

  @Field()
  address_city: string;

  @Field()
  address_zipcode: string;

  @Field()
  address_geo_lat: string;

  @Field()
  address_geo_lng: string;

  @Field()
  phone: string;

  @Field()
  website: string;

  @Field()
  company_name: string;

  @Field()
  company_catchPhrase: string;

  @Field()
  company_bs: string;
}
