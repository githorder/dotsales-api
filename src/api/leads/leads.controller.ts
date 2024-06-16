import { Controller, Get, Query } from '@nestjs/common';

import { Amocrm } from 'src/services/amocrm';

@Controller('api/leads')
export class LeadsController {
  constructor() {}

  @Get()
  async findAll(@Query('query') query: string) {
    const leads = await Amocrm.getLeads(query);

    return leads;
  }
}
