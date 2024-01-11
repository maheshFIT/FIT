const express = require('express');
const router = express.Router();

const contactController = require('../controller/contactUs')

router.post("/add-contact", contactController.addContactDetails);

module.exports = router