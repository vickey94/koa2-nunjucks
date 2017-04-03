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
.post('/login', async (ctx,next) => {
  var 
      username = ctx.request.body.username || '',
      pwd = ctx.request.body.password || '';

      console.log('username = ' + username + 'password = '+ pwd);

      
    var u1 = await db.create({
        id: '2' ,
        t_username:username,
        t_password:pwd
    });
    console.log('created: ' + JSON.stringify(u1));


ctx.render('users.html', {
                name:username
            });
})
  .put('/users/:id', function *(next) {
    // ... 
  })
  .del('/users/:id', function *(next) {
    // ... 
  });
module.exports = router;
