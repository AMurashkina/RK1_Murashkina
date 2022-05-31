const express = require('express');
const config = require('config');
const morgan = require('morgan');

const app = express();

app.use(express.json({ extended: true }));
app.use(morgan("[:date[iso]] Completed :url :method :status"))

app.use(['/', '/accept-form'], require('./routes/main'));

const PORT = config.get('port') || 5500;

(async function () {
   try {
       app.listen(PORT, () => console.log(`App has been started at port ${PORT}`));
   } catch (e) {
       console.log('Server error', e);
       process.exit(1);
   }
})()