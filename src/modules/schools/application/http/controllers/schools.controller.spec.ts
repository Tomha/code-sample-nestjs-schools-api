import {Test, TestingModule} from '@nestjs/testing';
import {SchoolsController} from './schools.controller';
import {AppService} from '../../app.service';

describe('AppController', () => {
  let appController: SchoolsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SchoolsController],
      providers: [AppService],
    }).compile();

    appController = app.get<SchoolsController>(SchoolsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
