require('dotenv').config({path: __dirname + '/../.env'});


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const next = require('next');


const port = process.env.PORT || 8080;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });


const handler = app.getRequestHandler();


app.prepare().then(() => {
  const server = express();
  server.use(cors());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());

  server.all('*', (req, res) => {
    return handler(req, res);
  });

  server.listen(port, (err) => {
    if (err) {
      throw err;
    };
    console.log(`Ready on http://localhost:${port}`);
  });
})
.catch((err) => {
  console.log(err.stack);
  process.exit(1);
});
