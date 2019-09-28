const router = require('express').Router();
const faker = require('faker');


const Objects=require('../models/objects');

//Routes

router.get('/',(req, res)=>{
    res.render('index');
});

router.get('/add-item',(req,res)=>{
res.render('items/add-item');

});

router.get('/generate-fake-data',(req,res)=>{
   for(let i=0;i<90;i++){
        const objects = new Objects();
        objects.category = faker.commerce.department();
        objects.name = faker.commerce.productName();
        objects.price = faker.commerce.price();
        objects.cover = faker.image.image();
        objects.save(err =>{if (err){return next(err);}
    });
   }
   res.redirect('/add-item');
});

module.exports =  router;
