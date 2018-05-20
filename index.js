let express = require('express');
let app = express();

app.use(express.static('releases'));

let server = app.listen(8080, () => {
    let { address, port } = server.address();

    console.log("应用实例，访问地址为 http://%s:%s", address, port);
});