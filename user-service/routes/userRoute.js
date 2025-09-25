const express = require('express')

const{createUser,
    getALLusers
} =require('../controllers/userController');

const router = express.Router();

// Route to create a new user
router.post('/createuser', createUser);
router.get('/getallusers', getALLusers);

module.exports = router