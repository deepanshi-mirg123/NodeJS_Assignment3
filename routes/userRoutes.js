const express = require('express');
const userControllers = require('../controllers/userController');
const router = express.Router();

router.get('/', userControllers.getalldata);
router.get('/:id', userControllers.getdata);
router.post('/', userControllers.postdata);
router.patch('/:id', userControllers.updatedata);
router.delete('/:id', userControllers.deletedata);


module.exports = router;