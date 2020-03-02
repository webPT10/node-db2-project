exports.seed = async function(knex) {
  // clears out all rows in table
  await knex("cars").truncate();

  await knex("cars").insert([
    {
      vin: 252518,
      make: "Mercedes-Benz",
      model: "300D",
      mileage: 303129
    },
    {
      vin: 345789,
      make: "Volkswagon",
      model: "Golf",
      mileage: 101025
    },
    {
      vin: 448448,
      make: "Volvo",
      model: "V70",
      mileage: 189585
    }
  ]);
};
