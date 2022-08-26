import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    category: String,
    type: String,
    image: String,
    description: String
})

var PostMessage = mongoose.model('products', postSchema);

export default PostMessage;