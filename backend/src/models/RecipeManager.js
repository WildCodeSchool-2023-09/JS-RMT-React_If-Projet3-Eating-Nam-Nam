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

  async readAllSections() {
    const [rows] = await this.database.query(
      `select COUNT(*) AS value, ${this.table}.section AS name from ${this.table} GROUP BY ${this.table}.section`
    );
    return rows;
  }

  async readNumberOfRecipes() {
    const [rows] = await this.database.query(
      `select COUNT(*) AS value from ${this.table}`
    );
    return rows;
  }

  async readById(id) {
    const [rows] = await this.database.query(
      `select r.id, r.picture, r.section, r.title, r.preparation_time, r.diet, r.difficulty, JSON_ARRAYAGG(JSON_OBJECT('id', i.id, 'quantity', ri.quantity, 'name', i.name, 'image', i.image, 'unity', i.unity )) as ingredients from ${this.table} as r 
       INNER JOIN recipe_ingr as ri on ri.recipe_id = r.id
       INNER JOIN ingredient as i on i.id = ri.ingr_id
       WHERE r.id  = ? `,
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
