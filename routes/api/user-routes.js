const router = require('express').Router();

const {
    getAllUsers,
    addUser,
    getUserByID,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// /api/users
router.route('/')
.get(getAllUsers)
.post(addUser);

// /api/users/:id
router.route('/:id')
.get(getUserByID)
.put(updateUser)
.delete(deleteUser);

// /api/users/:id/friends/:friendId

router.route('/:id/friends/:friendID')
.post(addFriend)
.delete(deleteFriend)


module.exports = router;