import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Post } from 'src/entities/post';
import { createPostInput, updatePostInput } from 'src/entities/types/inputs';

@Resolver()
export class PostResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Mutation(() => Post)
  createPost(@Args('data') data: createPostInput) {
    return this.prismaService.post.create({ data });
  }

  @Mutation(() => Post)
  updatePost(@Args('data') data: updatePostInput) {
    return this.prismaService.post.update({
      where: { id: data.id },
      data,
      include: { author: true },
    });
  }
}
