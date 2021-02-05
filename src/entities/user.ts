import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Post } from './post';

@ObjectType()
export class User {
  @Field((type) => ID)
  id: number;

  @Field()
  deviceID: string;

  @Field((type) => String, { nullable: true })
  nickname?: string | null;

  @Field((type) => [Post], { nullable: true })
  posts?: [Post] | null;
}
