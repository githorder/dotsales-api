import { Module } from '@nestjs/common';

import { LeadsModule } from './api/leads/leads.module';

@Module({
  imports: [LeadsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
