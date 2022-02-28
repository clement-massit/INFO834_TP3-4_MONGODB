const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost:27017/Mailing');

const UserSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    firstname: String,
    email: String,
});

const ListSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

const List = mongoose.model("List", ListSchema);
const User = mongoose.model("User", UserSchema);

module.exports = {
    List, User
}

List.find({"name" : "Mailing-List 1"})
    .populate("users")
    .exec(function (err, res){
        if (err) throw err;
        console.log(res)
    });
  