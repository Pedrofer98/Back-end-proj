//pg-promise
const config = {
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'db1'
}

const pgp = require("pg-promise")();
const db = pgp("postgres://postgres:db1@localhost:5432/project");

//db.any('INSERT INTO users VALUES ('Bob, test')
db.any("SELECT * from USERS").then((Users) => console.log(Users));

pgp.end();