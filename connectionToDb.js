const mysql=require('mysql')
const db=mysql.createConnection({
    host:"localhost",
    user:"robin",
    password:"Richie@innit4"
});
db.connect(function(err){
    if(err) {
        throw err;
    }else{
        console.log("connection successful")
    }
})