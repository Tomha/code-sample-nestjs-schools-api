import {Module} from '@nestjs/common';
import {Database} from 'sqlite';

@Module({
  providers: [
    {
      provide: Database,
      useFactory: async (): Promise<Database> => {
        const sqlite3 = await import('sqlite3');
        const sqlite = await import('sqlite');
        const db = await sqlite.open({
          filename: ':memory:',
          driver: sqlite3.Database,
        });
        // await db.migrate({
        //   migrationsPath: './src/migrations',
        // });
        return db;
      },
    },
  ],
})
export class SqliteModule {}
