const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController')
const proposalController = require('../Controllers/proposalController');

router.post('/signup',userController.signup)
router.post('/login',userController.login)
router.post('/pressReleases', proposalController.createPressRelease);
router.get('/pressReleases', proposalController.getPressReleases);
module.exports = router;