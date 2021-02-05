import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';

@Module({
  providers: [PrismaService, PostResolver, PostService],
})
export class PostModule {}
