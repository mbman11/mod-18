// import all controllers
const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend,

} = require('../../controllers/user-controller');

// get users and create user
router.route('/').get(getAllUsers).post(createUser);

// get user by id, update and delete by id
router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);

// post route to add friend and delete friend
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;