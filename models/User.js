const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: String,
    email: String,
    thoughts: Number, // Array of _id values referencing the Thought model
    friends: Number,//Array of _id values referencing the User model 
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
  },
  {
    
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


userSchema
  .virtual('friendCount')
  .get(function () {
    return `${this.friends}`;
  })
  

const User = model('user', userSchema);

module.exports = User;
