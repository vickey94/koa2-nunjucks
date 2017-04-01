var router = require('koa-router')();

router.get('/',async(ctx, next)=>{
 // ctx.state = {
  //  title: 'koa2 title'
 // };
 //  ctx.response.body = `<h1>Index</h1>`;
  ctx.render('index.html', {
           
        });
 console.log(`index`);
 
})
module.exports = router;
