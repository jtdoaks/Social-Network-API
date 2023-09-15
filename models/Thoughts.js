// update schema with new mongo stuff
const { Schema, model } = require('mongoose');
const thoughtsSchema = new Schema(
    {
      thoughText: {
        type: String,
        required: true,
        max_length: 50,
        // Must be between 1 and 280 characters
      },
      createdAt: {
        type: String,
        required: true,
        max_length: 50,
       // Date, Set default value to the current timestamp, Use a getter method to format the timestamp on query
      },
      username: {
        type: String,
        required: true
        // user that created this thought
      },
      reaction: {
        type: String,
        required: true,
        max_length: 50,
        // these are like replies
        // array of nested documents created with the reaction schema
      },
      //schema settings - Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );
  
  const Thoughts = model('thoughts', thoughtsSchema);
  
  module.exports = Thoughts;