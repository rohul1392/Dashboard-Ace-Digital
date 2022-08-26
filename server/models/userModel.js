import mongoose from 'mongoose';

const usersSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
})

var Users = mongoose.model('users', usersSchema);

export default Users;