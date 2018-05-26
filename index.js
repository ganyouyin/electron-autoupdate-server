let Koa = require('koa');
let app = new Koa();
let path = require('path');

app.use(require('koa-static')(path.resolve(__dirname + '/packages')));

let server = app.listen(8080, () => {
    let { address, port } = server.address();

    console.log("应用实例，访问地址为 http://%s:%s", address, port);
});