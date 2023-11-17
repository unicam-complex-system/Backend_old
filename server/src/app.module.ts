/*
 * Copyright (c) 2023. Leonardo Migliorelli <Glydric>
 */

import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { DatabaseService } from './database/database.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}