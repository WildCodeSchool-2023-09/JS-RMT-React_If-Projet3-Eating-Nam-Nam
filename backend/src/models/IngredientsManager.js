const AbstractManager = require("./AbstractManager");
const client = require("../../database/client");

class IngredientManager extends AbstractManager {
  constructor() {
    super({ table: "ingredient" });
  }

  async readAll() {
    const [rows] = await client.query(`select * from ${this.table}`);

    return rows;
  }

  async readById(id) {
    const [rows] = await client.query(
      `select * from ${this.table} WHERE id  = ? `,
      [id]
    );

    return rows[0];
  }
}
module.exports = IngredientManager;
