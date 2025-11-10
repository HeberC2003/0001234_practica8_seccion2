import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "labo8",
  password: "Joke2003",
  port: 5432,
});

export default pool;
