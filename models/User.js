// update schema with new mongo stuff
const { Schema, model } = require('mongoose');
const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        max_length: 50,
        //string, unique, required,trimmed
      },
      email: {
        type: String,
        required: true,
        max_length: 50,
        //string, unique, required,must match valid email. mongoose validation search
      },
      thoughts: {
        type: String,
        required: true,
        max_length: 50,
        //Array of _id values referencing the Thought model
      },
      friends: {
        type: String,
        required: true,
        max_length: 50,
        //Array of _id values referencing the User model (self-reference)
      },
      //Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );
  
  const User = model('user', userSchema);
  
  module.exports = User;
  