var router = require('koa-router')();

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
