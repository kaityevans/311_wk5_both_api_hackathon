const express = require("express");
const router = express.Router();
const controller = require("../controllers/employeesContact");

router.get("/users-contact", controller.getContact);

router.get("/users-contact/:id", controller.getContactById);

router.post("/users-contact", controller.postContact);

router.put("/users-contact", controller.putContact);

router.delete("/users-contact", controller.deleteContact);

module.exports = router;