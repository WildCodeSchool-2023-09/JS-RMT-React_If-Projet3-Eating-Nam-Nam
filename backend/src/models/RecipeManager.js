const AbstractManager = require("./AbstractManager");

class RecipeManager extends AbstractManager {
  constructor() {
    super({ table: "recipe" });
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} LIMIT 20`
    );
    return rows;
  }

  async readById(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} WHERE id  = ? `,
      [id]
    );

    return rows[0];
  }

  async update(id, recipe) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [result] = await this.database.query(
      `UPDATE ${this.table} set ? WHERE id = ?`,
      [recipe, id]
    );

    // Return the first row of the result, which represents the item
    return result;
  }

  async delete(id) {
    const result = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return result;
  }
}
module.exports = RecipeManager;
