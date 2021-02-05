import { Injectable } from '@nestjs/common';
import { Query } from '@nestjs/graphql';
import { PrismaService } from './prisma.service';
import { User } from './entities/user';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}
  // @Query()
  // getHello(): string {
  //   return 'Hello World!';
  // }
}
