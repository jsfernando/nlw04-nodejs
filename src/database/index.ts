import { Connection, createConnection, getConnectionOptions } from "typeorm";

// createConnection();

export default async (): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions(); //declaração pra pegar as info do arquivo ormconfig.json
  
    return createConnection(
      Object.assign(defaultOptions, { // aqui fazendo o teste de qual banco utilizar para banco normal ou de teste
        database:
          process.env.NODE_ENV === "test"
            ? "./src/database/database.test.sqlite"
            : defaultOptions.database,
      })
    );
  };