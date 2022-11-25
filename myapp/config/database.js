const mongoose = require('mongoose');
// connect database
mongoose.connect('mongodb://localhost:27017/myapp')
.then(()=>{
    console.log("Db is connected")
})

.catch((error)=>{
    console.log("Db is not connected due to :"+error)
})

