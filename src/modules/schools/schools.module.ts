import {Module} from '@nestjs/common';
import {SqliteModule} from '../sqlite/sqlite.module';
import {SchoolsController} from './application/http/controllers/schools.controller';
import {SchoolRepository} from './infrastructure/repositories/school.repository';
import {SchoolsService} from './domain/services/schools.service';

@Module({
  imports: [SqliteModule],
  controllers: [SchoolsController],
  providers: [
    SchoolsService,
    SchoolRepository,
  ],
})
export class SchoolsModule {}
