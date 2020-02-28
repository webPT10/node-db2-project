
exports.up = async function(knex) {
    await knex.schema.createTable("cars", (table) => {
        table.integer("VIN").notNull().unique().primary()
        table.text("MAKE").notNull()
        table.text("MODEL").notNull()
        table.integer("MILEAGE").notNull()
        table.text("TRANSMISSION TYPE")
        table.text("STATUS OF TITLE")
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("cars")
};
