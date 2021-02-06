import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SignupUserInput } from 'src/entities/types/inputs';
import { User } from 'src/entities/user';
import { PrismaService } from 'src/prisma.service';

@Resolver()
export class UserResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query(() => User, { nullable: true })
  async loginUser(@Args('deviceID') deviceID: string) {
    const user = this.prismaService.user.findUnique({
      where: {
        deviceID,
      },
      include: { posts: true },
    });
    if (user) return user;
    throw new Error('No users');
  }

  @Mutation(() => User)
  async registerUser(@Args('data') data: SignupUserInput) {
    try {
      return this.prismaService.user.create({
        data: { deviceID: '84823482384jhjhfjd', nickname: 'jojo' },
      });
    } catch {}
  }
}
