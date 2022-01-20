const Produs = require("../Models/produs");

const router = require("express").Router();
router
    .route("/produse")
    .get(async(req, res) => {
        try {
            const produse = await Produs.findAll();
            return res.status(200).json(produse);
        } catch (err) {
            return res.status(500).json(err);
        }
    })
    .post(async(req, res) => {
        try {
            const newProduct = await Produs.create(req.body);
            return res.status(200).json(newProduct);
        } catch (err) {
            return res.status(500).json(err);
        }
    });

module.exports = router;