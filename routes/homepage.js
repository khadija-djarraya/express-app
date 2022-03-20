var express = require('express');
var router = express.Router();
var valid = require("../mychecker");

/* GET users listing. */
router.get(['/','/home'], function(req, res){
   if(valid()){
    res.render('homepage', {
       name:"This is our homepage", 
       path1:"/",
       path2:"/contact",
       path3:"/our-services"
    });
   }
   else res.send("you are using this website outside working hours.");
 })

module.exports = router;