import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  tuit: String,
  title: String,
  likes: {type: Number, default: 0},
  dislikes: {type: Number, default: 0},
  replies: {type: Number, default: 0},
  retuits: {type: Number, default: 0},
  liked: Boolean,
  username: String,
  handle: String,
  image: String,
  time: String,
  topic: String
}, {collection: 'tuits'});

export default schema;