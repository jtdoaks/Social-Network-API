const { Schema, model } = require('mongoose');
const Response = require('./Response');


const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: { // (The user that created this thought)
      type: Boolean,
      default: true,
    },
    reactions: {
      type: String, // Array of nested documents created with the reactionSchema
      minLength: 15,
      maxLength: 500,
    },
    responses: [Response],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


thoughtSchema
  .virtual('reactionCount')
  
  .get(function () {
    return this.reactions.length;
  });


const Thought = model('thought', thoughtSchema);

module.exports = Thought;
