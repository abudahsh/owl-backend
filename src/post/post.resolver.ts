import { Args, Field, InputType, Mutation, Resolver } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Post } from 'src/entities/post';

@InputType()
class createPostInput {
  @Field()
  authorId?: number;
  @Field({ nullable: true })
  content?: string;
  @Field({ nullable: true })
  title: string;
}

@Resolver()
export class PostResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Mutation(() => Post)
  createPost(@Args('data') data: createPostInput) {
    return this.prismaService.post.create({ data });
  }
}
