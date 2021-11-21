import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
  /**
   * Notice above that if a property only requires a type, it can be specified using a shorthand notation 
   * (contrast the title property above with the date property).
   */
});

const Blog = mongoose.model('Blog', blogSchema);

const schema = new Schema();
schema.path('_id');

const Model = mongoose.model('Test',schema);
const doc = new Model();
doc._id instanceof mongoose.Types.ObjectId; // true

//You can also overwrite Mongoose's default _id with your own _id. Just be careful: 
// Mongoose will refuse to save a document that doesn't have an _id, 
// so you're responsible for setting _id if you define your own _id path.


