import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { PhotoModule } from './photo/photo.module';
import { UsersModule } from './user/users.module';

@Module({
  imports: [TodoModule, PhotoModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
