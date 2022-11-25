const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/testDb")
.then(()=>console.log("db is connected"))
.catch((error)=> {
    console.log("db is not connected");
    console.log(error);
    process.exit(1);
});