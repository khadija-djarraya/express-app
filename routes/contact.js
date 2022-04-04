var express = require('express');
var router = express.Router();
var valid = require("../mychecker");
console.log("contact js file is accessed.")
/* GET users listing. */
router.get('/', function(req, res){
   if(valid()){
    res.render('contact', {
       name:"You can contact us here"
    });
   }
   else res.send("you are using this website outside working hours.");
 });

module.exports = router;