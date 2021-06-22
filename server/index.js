const express = require('express');
const next = require('next');
const axios = require('axios');


const port = process.env.PORT || 8080;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });


const handler = app.getRequestHandler();


app.prepare().then(() => {
  const server = express();

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
