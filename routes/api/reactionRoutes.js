const router = require('express').Router();
const {
  getReactions,
  getSingleReaction,
  createReaction,
  updateReaction,
  deleteReaction,
  addReaction,
  removeReaction,
} = require('../../controllers/reactionController');

// /api/thoguhts
router.route('/').get(getReactions).post(createReaction);

// /api/reactions/:reactionId
router
  .route('/:reactionId')
  .get(getSingleReaction)
  .put(updateReaction)
  .delete(deleteReaction);

// /api/reactions/:reactionId/reactions
router.route('/:reactionId/reactions').post(addReaction);

// /api/reactions/:reactionId/reactions/:reactionId
router.route('/:reactionId/reactions/:reactionId').delete(removeReaction);

module.exports = router;