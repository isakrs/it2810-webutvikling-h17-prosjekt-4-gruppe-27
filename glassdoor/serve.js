const express = require('express')
const path = require('path')
let app = express()
let port = 8084;

app.use(express.static(__dirname + '/dist'));
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/index.html'));
})

app.listen(port,function(){
    console.log('running')
})
