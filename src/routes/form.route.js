const express = require('express');
var router = express.Router();
// var formController = require('../controllers/form.controller');
const formController = require('../controllers/form.controller');


const multer = require("multer");
const DisplayController = require('../controllers/form.controller');




var fileConfig = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, "uploads/")
    },
    filename: (req, file, callback) => {
      callback(null, `demo-${Date.now()}.${file.originalname}`)
    }
  })

const upload = multer({
    storage: fileConfig,
    limits: { fileSize: '2000000' },
  })



//For saving the form
router.post('/save',upload.array('image'),  formController.SaveFormController)
router.get('/display', formController.DisplayController)


module.exports = router;