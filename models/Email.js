// update schema with new mongo stuff
const { Schema, model } = require('mongoose');
const emailSchema = new Schema(
    {
      thoughText: {
        type: String,
        required: true,
        max_length: 50,
      },
      createdAt: {
        type: String,
        required: true,
        max_length: 50,
      },
      username: {
        type: String,
        required: true,
        max_length: 50,
      },
      reaction: {
        type: String,
        required: true,
        max_length: 50,
      },
      
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );
  
  const Email = model('email', emailSchema);
  
  module.exports = Email;