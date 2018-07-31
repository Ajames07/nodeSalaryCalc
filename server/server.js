const express = require('express');
const app = express();

app.use(express.static( 'server/public' ) );

let port = 5000;

app.listen( port, () => {
    console.log('server is up on', port);   
});

app.get('/aj',function(req,res){
    console.log('in route AJ');
    res.send('hello!');
});