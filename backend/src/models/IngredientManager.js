const AbstractManager = require("./AbstractManager");
const client = require("../../database/client");

class IngredientManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "user" as configuration
    super({ table: "ingredient" });
  }

  // The C of CRUD - Create operation

  async create(ingredient) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await client.query(
      `insert into ${this.table} (name, quantity, image, calorie, carbonhydrate, protein, lipid, fiber, is_validated, category ) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        ingredient.name,
        ingredient.quantity,
        ingredient.image,
        ingredient.calorie,
        ingredient.carbonhydrate,
        ingredient.protein,
        ingredient.lipid,
        ingredient.fiber,
        ingredient.is_validated,
        ingredient.category,
      ]
    );
    // Return the ID of the newly inserted user
    return result.insertId;
  }

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
    // Execute the SQL SELECT query to retrieve all users from the "user" table
    const [rows] = await client.query(`select * from ${this.table}`);

    //     // Return the array of users
    return rows;
  }

  async update(id, ingredient) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [result] = await client.query(
      `UPDATE ${this.table} set ? WHERE id = ?`,
      [ingredient, id]
    );

    // Return the first row of the result, which represents the item
    return result;
  }

  async delete(id) {
    const result = await client.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return result;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  //   async update(id, user) {
  //     // Execute the SQL SELECT query to retrieve a specific user by its ID
  //     const [result] = await client.query(
  //       `UPDATE ${this.table} set ? WHERE id = ?`,
  //       [user, id]
  //     );

  //     // Return the first row of the result, which represents the item
  //     return result;
  //   }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove a user by its ID

  //   async delete(id) {
  //     const result = await client.query(
  //       `DELETE FROM ${this.table} WHERE id = ?`,
  //       [id]
  //     );

  //     // Return the first row of the result, which represents the user
  //     return result;
  //   }
}

module.exports = IngredientManager;
