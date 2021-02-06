import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SignupUserInput {
  @Field({ nullable: true })
  nickname?: string;
  @Field({ nullable: true })
  id?: string;
  @Field({ nullable: true })
  deviceId?: string;
}

@InputType()
export class createPostInput {
  @Field()
  authorId?: number;
  @Field({ nullable: true })
  content?: string;
  @Field({ nullable: true })
  title: string;
}
@InputType()
export class updatePostInput {
  @Field()
  authorId: number;
  @Field()
  id: number;
  @Field({ nullable: true })
  content?: string;
  @Field({ nullable: true })
  title?: string;
}
