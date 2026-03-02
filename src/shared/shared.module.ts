import { Module } from '@nestjs/common';
import { SharedController } from './shared.controller';
import { HashService } from './services/hash.service';

@Module({
  controllers: [SharedController],
  providers: [HashService],
  exports: [HashService]
})
export class SharedModule {}
