const AbstractManager = require("./AbstractManager");
const client = require("../../database/client");

class AuthManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "user" as configuration
    super({ table: "auth" });
  }

  // The C of CRUD - Create operation

  async create(auth) {
    // Execute the SQL INSERT query to add a new auth to the "auth" table
    const [result] = await client.query(
      `insert into ${this.table} (mail, password) values (?, ?)`,
      [auth.mail, auth.password]
    );
    // Return the ID of the newly inserted user
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read() {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await this.database.query(
      `SELECT  id FROM ${this.table} WHERE id = ( 
        SELECT MAX( id )  AS idMax FROM ${this.table} )`
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  /*
  async readAll() {
    // Execute the SQL SELECT query to retrieve all users from the "user" table
    const [rows] = await client.query(
      `select id, username, DATE_FORMAT(birthday, "%Y-%m-%d")birthday, picture, regime_id, auth_id from ${this.table}`
    );

    // Return the array of users
    return rows;
  }
*/
  /*
  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  async update(id, user) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [result] = await client.query(
      `UPDATE ${this.table} set ? WHERE id = ?`,
      [user, id]
    );

    // Return the first row of the result, which represents the item
    return result;
  }
*/
  /*
  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove a user by its ID

  async delete(id) {
    const result = await client.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return result;
  }
  */
}

module.exports = AuthManager;
