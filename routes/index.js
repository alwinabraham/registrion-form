var express = require('express');
var fs = require('file-system');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.post('/',(req,res)=>{

  var {firstname,lastname,address,inlineRadioOptions,date,pincode,course,email} = req.body;
  
  function register(){
    var data = "\n"+firstname +"\t"+lastname+"\t"+address+"\t"+inlineRadioOptions+"\t"+date+"\t"+pincode+"\t"+course+"\t"+email;
    return data;
  }
  fs.appendFile('./untitle.ods',register(),function(err){
    console.log("data is saved");
    res.redirect('/users')
  })
});

router.get('/logout',(req,res)=>{
  res.redirect('/');
})
module.exports = router;
