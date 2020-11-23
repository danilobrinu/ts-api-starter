import path from 'path';
import { createConnection } from 'typeorm';

const BASE_DIR = path.dirname(path.dirname(__dirname));

export const getConnection = async () => {
  const connection = await createConnection({
    type: 'sqlite',
    database: path.join(BASE_DIR, 'database.sqlite3'),
    synchronize: true,
    logging: false,
    entities: [path.join(BASE_DIR, '/api/domain/**/entities/**/*.ts')],
    migrations: [path.join(BASE_DIR, '/api/migrations/**/*.ts')],
    subscribers: [path.join(BASE_DIR, '/api/domain/**/subscribes/**/*.ts')],
  });

  return connection;
};
