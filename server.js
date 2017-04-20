'use strict';
const express = require('express');
const app     = express();

app.get('/', (req, res) => {
  
  const languages = req.acceptsLanguages();
  const ua = req.headers['user-agent'];
  const os = ua.match(/\(([^\(\)]+)\)/);

  const data = {
    ip:req.ip,
    language:languages.length > 0 ? languages[0]: '',
    software:os[1],
  };

  res.send(JSON.stringify(data));
});

const listen_port = process.env.PORT || 8080;
app.listen(listen_port, ()=> {
  console.log('app listening on port '+listen_port);
});