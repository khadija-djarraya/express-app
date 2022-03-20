var express = require('express');
var router = express.Router();
var valid = require("../mychecker");

/* GET users listing. */
router.get('/', function(req, res){
   if(valid()){
    res.render('our-services', {
       name:"You can find our services here.", 
       path1:"/",
       path2:"/contact",
       path3:"/our-services"
    });
   }
   else res.send("you are using this website outside working hours.");
 });

module.exports = router;
