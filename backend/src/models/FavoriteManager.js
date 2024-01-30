const AbstractManager = require("./AbstractManager");
const client = require("../../database/client");

class FavoriteManager extends AbstractManager {
  constructor() {
    super({ table: "favorites" });
  }

  async readAll() {
    const [rows] = await client.query(`select * from ${this.table}`);

    return rows;
  }

  async readById(id) {
    const [rows] = await client.query(
      `select * from ${this.table} WHERE auth_id  = ? `,
      [id]
    );

    return rows[0];
  }

  async readByAuthId(id) {
    const [rows] = await client.query(
      `select * from ${this.table} WHERE auth_id  = ? `,
      [id]
    );

    return rows[0];
  }

  async readAllById(id) {
    const [rows] = await client.query(
      `select recipe_id from ${this.table} WHERE auth_id  = ? `,
      [id]
    );

    return rows;
  }

  async create(favorites, id) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (recipe_id, auth_id) VALUES (?, ?)`,
      [favorites.recipeId, id]
    );
    return result.insertId;
  }

  async update(id, recipes) {
    const [result] = await client.query(
      `UPDATE ${this.table} set ? WHERE id = ?`,
      [recipes, id]
    );
    return result;
  }

  async delete(id) {
    const result = await client.query(
      `DELETE FROM ${this.table} WHERE recipe_id = ?`,
      [id]
    );
    return result;
  }
}
module.exports = FavoriteManager;
