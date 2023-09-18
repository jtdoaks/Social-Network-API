const { Thought, User, Reaction } = require('../models');

module.exports = {
  async getReactions(req, res) {
    try {
      const reaction = await Thought.find();
      res.json(req.params.thoughtId);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },
  async getSingleReaction(req, res) {
    try {
      const reaction = await Reaction.findOne({ _id: req.params.reactionId })

      if (!reaction) {
        return res.status(404).json({ message: 'No reaction with that ID' });
      }

      res.json(reaction);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  async createReaction(req, res) {
    try {
      
      const reaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: 'Reaction created, but found no user with that ID',
        });
      }

      res.json('Created the reaction 🎉');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async updateReaction(req, res) {
    try {
      const reaction = await Reaction.findOneAndUpdate(
        { _id: req.params.reactionId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!reaction) {
        return res.status(404).json({ message: 'No reaction with this id!' });
      }

      res.json(reaction);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async deleteReaction(req, res) {
    try {
      const reaction = await Reaction.findOneAndRemove({ _id: req.params.reactionId });

      if (!reaction) {
        return res.status(404).json({ message: 'No Reaction with this id!' });
      }

      const user = await User.findOneAndUpdate(
        { reactionshought: req.params.reactionId },
        { $pull: { reactions: req.params.reactionId } },
        { new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'Reaction created but no user with this id!' });
      }

      res.json({ message: 'Reaction successfully deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
 
  async addReaction(req, res) {
    try {
      const reaction = await Reaction.findOneAndUpdate(
        { _id: req.params.reactionId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!reaction) {
        return res.status(404).json({ message: 'No Reaction with this id!' });
      }

      res.json(reaction);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  async removeReaction(req, res) {
    try {
      const reaction = await Reaction.findOneAndUpdate(
        { _id: req.params.reactionId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      )

      if (!reaction) {
        return res.status(404).json({ message: 'No Reaction with this id!' });
      }

      res.json(reaction);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
