import { Pool } from 'pg';

require('dotenv').config();

const db = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  // maximum number of clients the pool should contain
  // by default this is set to 10.  There is some nuance to setting the maximum size of your pool.
  // see https://node-postgres.com/guides/pool-sizing for more information
  max: 20,
  // number of milliseconds a client must sit idle in the pool and not be checked out
  // before it is disconnected from the backend and discarded
  // default is 10000 (10 seconds) - set to 0 to disable auto-disconnection of idle clients
  idleTimeoutMillis: 30000,
  // number of milliseconds to wait before timing out when connecting a new client
  // by default this is 0 which means no timeout
  connectionTimeoutMillis: 2000,
  // Sets a max overall life for the connection.
  // A value of 60 would evict connections that have been around for over 60 seconds,
  // regardless of whether they are idle. It's useful to force rotation of connection pools through
  // middleware so that you can rotate the underlying servers. The default is disabled (value of zero)
  maxLifetimeSeconds: 60
});

export default db;