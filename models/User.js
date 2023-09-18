const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: { 
      type: String, 
      required: true, 
      unique: true 
    },
    email: { 
      type: String, 
      required: true, 
      unique: true 
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      }
    ],
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

userSchema.pre('save', function(next) {
  const user = this;

  if(user.username) {
    user.username = user.username.trim();
  }
  if (user.email) {
    user.email = user.email.trim();
  }
  next();
});

userSchema
  .virtual('friendCount')
  .get(function () {
    return `${this.friends}`;
  })
  

const User = model('user', userSchema);

module.exports = User;
