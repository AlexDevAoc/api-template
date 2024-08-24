import { Module } from '@nestjs/common';
import { HandleExceptionsService } from './common.service';

@Module({
  controllers: [],
  providers: [HandleExceptionsService]
})
export class CommonModule {}
