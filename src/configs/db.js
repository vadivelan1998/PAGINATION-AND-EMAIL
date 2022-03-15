const mongoose = require("mongoose")
module.exports=()=>{
    return mongoose.connect(
      "mongodb+srv://vadivelan1998:vadivelan1234@cluster0.2rrwk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );

}
// module.exports=connect