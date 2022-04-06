var express = require('express');
var router = express.Router();
var valid = require("../mychecker");

/* GET users listing. */
router.get(['/','/home'], function(req, res){
   if(valid()){
      //console.log("accessed the func")
    res.render('homepage', {
       name:"This is our homepage"
    });
   }
   else res.send("you are using this website outside working hours.");
 })

module.exports = router;