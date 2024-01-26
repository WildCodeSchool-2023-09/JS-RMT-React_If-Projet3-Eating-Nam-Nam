const AbstractManager = require("./AbstractManager");

class RecipeManager extends AbstractManager {
  constructor() {
    super({ table: "recipe" });
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT picture,(favorites.auth_id = 1) as fav, recipe.picture, recipe.section, recipe.title, recipe.preparation_time, recipe.cooking_time, recipe.difficulty FROM recipe LEFT join favorites on favorites.recipe_id = recipe.id LIMIT 100`
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
}
module.exports = RecipeManager;
