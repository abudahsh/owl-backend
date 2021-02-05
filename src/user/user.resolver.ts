import { Inject } from '@nestjs/common';
import {
  Args,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { User } from 'src/entities/user';
import { PrismaService } from 'src/prisma.service';
@InputType()
class SignupUserInput {
  @Field({ nullable: true })
  nickname?: string;
  @Field({ nullable: true })
  id?: string;
  @Field({ nullable: true })
  deviceId?: string;
}

@Resolver()
export class UserResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query(() => User, { nullable: true })
  async loginUser(@Args('deviceID') deviceID: string): Promise<User> {
    const user = this.prismaService.user.findUnique({
      where: {
        deviceID,
      },
    });
    if (user) return user;
    throw new Error('No users');
  }

  @Mutation(() => User)
  async registerUser(@Args('data') data: SignupUserInput): Promise<User> {
    try {
      return this.prismaService.user.create({
        data: { deviceID: '84823482384jhjhfjd', nickname: 'jojo' },
      });
    } catch {}
  }
}
