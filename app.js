const express = require('express');

const app = express();
app.set('view engine' , 'ejs')

app.use(express.urlencoded({extended:false}))
app.use(express(JSON))

app.use("/", require("./router"))


const PORT = 8080;
app.listen(PORT);
      console.log(`Esta iniciando en el puerto ${PORT}`);






