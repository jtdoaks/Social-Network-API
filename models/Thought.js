const { Schema, model } = require('mongoose');
const Response = require('./Response');


const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      lastAccessed: { type: Date, default: Date.now },
    },
    username: { // The user that created this thought
      type: String,
      required: true,
    },
    reactions: [
        {
          type: Schema.Types.ObjectId,
          ref: 'response',
        }
      ],
    
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
