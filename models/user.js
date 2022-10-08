//pg-promise
const userData = require('../front-end-js/create-account')

const config = {
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'db1'
}

const pgp = require("pg-promise")();
const db = pgp("postgres://postgres:db1@localhost:5432/project");

function addRow(){
  db.none("INSERT INTO users (username, password) VALUES (${username},${password})")
}
addRow()

module.exports = {
  addRow

}

pgp.end();