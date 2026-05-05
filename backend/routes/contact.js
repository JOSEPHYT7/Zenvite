const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { submitContact } = require('../controllers/contactController');

router.post('/', [
  check('fullName', 'Full name is required').not().isEmpty().trim().escape(),
  check('email', 'Please include a valid email').isEmail().normalizeEmail(),
  check('phoneNumber', 'Phone number is required').not().isEmpty().trim().escape(),
  check('eventType', 'Event type is required').not().isEmpty().trim().escape(),
  check('message', 'Message must be at least 10 characters').isLength({ min: 10 }).trim().escape()
], submitContact);

module.exports = router;
