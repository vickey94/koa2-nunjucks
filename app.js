'use strict';

const Koa = require('koa');
const app = new Koa();


const router = require('koa-router')();
const staticServer = require('koa-static');

const convert = require('koa-convert');
const json = require('koa-json');

const bodyparser = require('koa-bodyparser')();
const templating = require('./templating');

const isProduction = process.env.NODE_ENV === 'production';

const index = require('./routes/index');
const users = require('./routes/users');
//const users = require('./routes/users');
//const api = require('./routes/api');





// middlewares
app.use(convert(bodyparser));
app.use(convert(json()));

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});

//加载表态文件
app.use(staticServer(__dirname + '/public'));

// add nunjucks as view:
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

router.use('/', index.routes(), index.allowedMethods());
router.use('/users', users.routes(), users.allowedMethods());
//router.use('/api', api.routes(), api.allowedMethods());

app.use(router.routes(), router.allowedMethods());


//404
app.use(async (ctx) => {
  ctx.status = 404;
  console.log('404'+ctx.request.url);
   await ctx.render('404.html');
})


//------------------------------


module.exports = app;