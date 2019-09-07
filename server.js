const express = require('express');
// const serveStatic = require("serve-static")
// const path = require('path');
const app = express();

// app.use(serveStatic(path.join(__dirname, 'public')));



//Handle production. Make sure this is below the route just above
if(process.env.NODE_ENV === 'production'){
  //Static folder
  app.use(express.static(__dirname + '/public'));

  //Handle SPA
  app.get(/.*/, (req,res) => res.sendFile(__dirname + '/public/index.html'))
}

const port = process.env.PORT || 8081;
app.listen(port);
