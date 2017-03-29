const express = require('express');
const app = express();

app.use('/general', require('./app/routes/general'));
app.use('/camera', require('./app/routes/camera'));

app.listen(3000);
