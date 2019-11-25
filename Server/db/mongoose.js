const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/review-api',{
//     useNewUrlParser: true,
//     useCreateIndex : true,
//     useUnifiedTopology: true 
// })


mongoose.connect('mongodb+srv://saurabhkasar:saurabh1@reviewsystemdb-owu7l.mongodb.net/review-api?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex : true,
    useUnifiedTopology: true 
})
