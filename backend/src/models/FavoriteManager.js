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
      `select * from ${this.table} WHERE id  = ? `,
      [id]
    );

    return rows[0];
  }
}
module.exports = FavoriteManager;
