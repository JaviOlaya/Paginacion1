const router =require('express').Router();

router.get('/',(req, res)=>{
    res.render('index');
});

router.get('/add-object',(req,res)=>{
res.render('items/add-item.ejs');

});

module.exports =  router;
