const router = require('express').Router();
const {
  
  createFriend,
  deleteFriend
 
} = require('../../controllers/friendsController');




router

  .post(createFriend)
 
  .delete(deleteFriend);



module.exports = router;