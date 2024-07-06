const mongoose = require("mongoose");
//connecting to the game DataBase
async function connectToDB(){
mongoose.connect('mongodb://localhost:27017/game', {
    dbName:"game",
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));
}

module.exports = connectToDB;

