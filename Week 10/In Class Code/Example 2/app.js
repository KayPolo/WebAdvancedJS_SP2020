let express = require('express');

let app = express();

app.get('/', (request,response)=>{

    response.send('This is me using EXPRESS!!!');

})

let PORT = 4000;
app.listen(PORT,()=>{

    console.log("Express server is runing");
})

