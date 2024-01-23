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

  async create(favorites) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (recipe_id, auth_id) VALUES (?, ?)`,
      [favorites.recipeId, favorites.user]
    );
    return result.insertId;
  }
}

module.exports = FavoriteManager;
