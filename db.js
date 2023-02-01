const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "post42",
  host: "localhost",
  port: 5432,
  database: "todos",
});

module.exports = pool;
