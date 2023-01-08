const http = require("http");
const app = require("./app");
const path = require('path');
const express = require('express');
const router = express.Router();
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });
  app.use('/', router);
server.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`);
});