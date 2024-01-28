import {Inject} from '@nestjs/common';
import {ConfigModule, ConfigType, registerAs} from '@nestjs/config';

const sqliteConfig = registerAs('sqlite', () => {
  const config = {
    databaseDirectory: process.env.SQLITE_DATABASE_DIRECTORY,
    databaseFilename: process.env.SQLITE_DATABASE_FILENAME,
  };

  if (!config.databaseDirectory || !config.databaseFilename) {
    throw new Error('Unable to load sqlite config. Check environment variables - did you copy the .env.example file?');
  }

  return config;
});

export const SQLITE_CONFIG = sqliteConfig.KEY;
export const InjectSqliteConfig = () => Inject(SQLITE_CONFIG);

/**
 * Example of creating module-specific configs.
 */
export class SqliteConfigModule {
  public static register() {
    return ConfigModule.forFeature(sqliteConfig);
  }
}

export type SqliteConfig = ConfigType<typeof sqliteConfig>;
