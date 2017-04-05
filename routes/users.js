var router = require('koa-router')();
var db = require('../db');

router.get('/',async(ctx, next)=>{
   ctx.render('users.html', {
            title: 'Welcome',
            name:'nodejs',
            fruits: ['Apple', 'Pear', 'Banana'],
    count: 12000
            
        });
 console.log('user');
})
.get('/ajax/:id&:name',async(ctx,next)=>{
    let id = ctx.params.id;
    let name = ctx.params.name ;
    console.log ('id is '+ id + ' name is '+ name);

 /*
     ctx.response.type = 'application/json';

        ctx.response.body = {

            products: products

        };
  */


})
.post('/login', async (ctx,next) => {
  var 
      username = ctx.request.body.username || '',
      pwd = ctx.request.body.password || '';

  console.log('username = ' + username + 'password = '+ pwd);

  
var sql = "INSERT INTO test.tb_users (`id`,`t_username`,`t_password`) VALUES (NULL,'11','11')";
    var u1 = await db.sequelize.query(sql,{ type: db.sequelize.QueryTypes.INSERT});
   
   /* var u1 = await db.User.create({
     //   id: '2' ,
        t_username:username,
        t_password:pwd
    })*/

    console.log('created: ' + JSON.stringify(u1));

  ctx.render('users.html', {
                name:username
            });
    

}).put('/users/:id', function *(next) {
    // ... 
  })
  .del('/users/:id', function *(next) {
    // ... 
  });
module.exports = router;
