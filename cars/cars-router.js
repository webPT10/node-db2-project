const express = require('express')
const db = require('../data/config');

const router = express.Router()

// returns empty []
router.get('/', async (req, res, next) => {
    try {
        const cars = await db.select("*").from("cars")
        res.json(cars)
    } catch(error){
        next(error)
    }
})

router.get("/:vin", async (req, res, next) => {
    try {
        const carId = await db.first("*").from("cars").where({ VIN: req.params.vin })
        res.json(carId)

    } catch(error){
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const carData = req.body
        const [id] = await db.select("*").from("cars").insert(carData)
        const newCar = await db.select("*").from("cars").where("id", id).first()
        
        res.json(newCar)
    } catch(error){
        next(error)
    }
})

module.exports = router;