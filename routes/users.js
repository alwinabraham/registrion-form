var express = require('express');
var router = express.Router();


const authenticate = (req,res,next)=>{
  if(req.session.user){
    next();
  }else{
    res.redirect('/')
  }
} 
/* GET users listing. */
router.get('/',authenticate,function(req, res, next) {
  res.render('success');
});

module.exports = router;
