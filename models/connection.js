const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:Diego131997@cluster0.31fwg.mongodb.net/tickethack'
mongoose.connect(connectionString, {connectTimeoutMS : 2000 })
.then(()=> console.log('Database connected'))
.catch(error => console.error(error));