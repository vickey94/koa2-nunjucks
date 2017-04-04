var router = require('koa-router')();
var db = require('../db');

router.get('/',async(ctx, next)=>{
 // ctx.state = {
  //  title: 'koa2 title'
 // };
 //  ctx.response.body = `<h1>Index</h1>`;


      var pets = await db.sequelize.query("Select * From tb_users",{ type: db.sequelize.QueryTypes.SELECT});

//     var pets = await db.User.findAll({
//         where: {
//           //  t_username: '123'
//         }
//     });
    
    console.log('find' + pets.length+' pets:');
     for (let p of pets) {
        console.log(JSON.stringify(p));
     }

  ctx.render('index.html', {
           pets:pets,
           count:pets.length
        });
 console.log(`index`);
 
})
module.exports = router;
