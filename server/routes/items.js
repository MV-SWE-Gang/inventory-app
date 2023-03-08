const express = require("express");
const { where } = require("sequelize");
const router = express.Router();
const { Item } = require("../models");
const {check, validationResult} = require("express-validator");

// GET /items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const items = await Item.findByPk(req.params.id);
    res.send(items);
  } catch (error) {
    next(error);
  }
});

router.post("/", 
  [
    check(["name", "description", "category", "image"])
      .not()
      .isEmpty()
      .withMessage("Please provide a valid value for this field")
      .trim(),
    check("price")
      .isInt({min: 0})
      .withMessage("Please provide a valid price between 0 and 10000000")
    ], 
  async (req, res, next) => {
  try {
    const errors = validationResult(req);
    // If the validationResults returns any errors, then trigger a response
    if(!errors.isEmpty()){
        res.json({error: errors.array()})
    } else {
    const items = await Item.create(req.body);
    res.send(items);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await Item.destroy({where: {id: req.params.id}});
    res.send("deleted ;)");
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const items = await Item.update(req.body, {where: {id: req.params.id}});
    res.send(items);
  } catch (error) {
    next(error);
  }
});

module.exports = router;