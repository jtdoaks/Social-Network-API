const { Thought, User, Reaction } = require('../models');

module.exports = {
    async createFriend(req, res) {
    try {
      
      const friends = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.body } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: 'Friend created, but found no user with that ID',
        });
      }

      res.json('Created the friend 🎉');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async deleteFriend(req, res) {
    try {
      const reaction = await User.findOneAndRemove({ _id: req.params.reactionId });

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
  }
};