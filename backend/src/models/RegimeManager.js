const AbstractManager = require("./AbstractManager");

class RegimeManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "user" as configuration
    super({ table: "regime" });
  }

  // The C of CRUD - Create operation
  /*

  async create(user) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await this.database.query(
      `insert into ${this.table} (username, birthday, picture, regime_id) values (?, ?, ?, ?)`,
      [user.username, user.birthday, user.picture, user.regime_id]
    );
    // Return the ID of the newly inserted user
    return result.insertId;
  }
  */

  // The Rs of CRUD - Read operations

  /*
  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }
  */

  async readAll() {
    // Execute the SQL SELECT query to retrieve all users from the "regime" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of users
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item
  /*
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

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove a user by its ID

  /*
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

module.exports = RegimeManager;
