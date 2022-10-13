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
//console.log(db)


function addRow(x, y){

  try {
    db.none(`INSERT INTO users (username, password) VALUES ('${x}', '${y}')`) // do  correct the syntax for the template literal
    // ^^ to insert the username and password into the DB
    console.log('addRow is run')
    //console.log(x)
    pgp.end();

  } catch (error) {
    console.error(error)
    throw error
  }
  // db.none(`INSERT INTO users (username, password) VALUES ('${x}', '${y}')`) // do  correct the syntax for the template literal
  // // ^^ to insert the username and password into the DB
  // console.log('addRow is run')
  // //console.log(x)
  // pgp.end();
}

exports.addRow = addRow;



