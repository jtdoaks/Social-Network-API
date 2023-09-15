// update schema with new mongo stuff
const { Schema, model } = require('mongoose');
const reactionSchema = new Schema(
    {
      reactionId: {
        type: String,
        required: true,
        max_length: 50,
        // Use Mongoose's ObjectId data type. Default value is set to a new ObjectId
      },
      reactionBody: {
        type: String,
        required: true,
        max_length: 280,
      },
      username: {
        type: String,
        required: true
      },
      CreatedAt: {
        type: String,
        required: true,
        max_length: 50,
        // Date
        //Set default value to the current timestamp
        //Use a getter method to format the timestamp on query
      },
      //schema settings - This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );
  
  const Reaction = model('reaction', reactionSchema);
  
  module.exports = Reaction;