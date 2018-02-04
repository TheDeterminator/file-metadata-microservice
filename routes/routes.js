const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage: storage});

//the module that is routes through this API
const fileMulter = require('../file/metadata');


//here we catch a variety of URLs and route them to the same place
router.route('/api/file-size').post(upload.single('file'), fileMulter.parse);
router.route('/api').post(upload.single('file'), fileMulter.parse);

//May want to add in a call to default to landing page if no API reuest

module.exports = router;
                          
