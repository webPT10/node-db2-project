
exports.up = async function(knex) {
    await knex.schema.alterTable("cars", (table) => {
        table.integer("ID").unique().notNull().primary()
        // table.integer("VIN").notNull().unique()
    })
};

exports.down = async function(knex) {
    await knex.schema.alterTable("cars", (table) => {
        // table.dropColumn("ID")
        table.dropColumn("VIN")
    })
  };
