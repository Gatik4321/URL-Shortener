const express = require('express');
const { handleUserSignUp,handleUserLoginUp} = require('../controllers/user'); // Corrected import
const router = express.Router();

router.post('/', handleUserSignUp);
router.post("/login",handleUserLoginUp);

module.exports = router;
