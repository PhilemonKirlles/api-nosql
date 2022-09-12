const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtByID,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// /api/thoughts/
router.route('/')
.get(getAllThoughts)

// api/thoughts/:userId
router.route('/:userId')
.post(createThought)

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
.get(getThoughtByID)
.put(updateThought)
.delete(deleteThought)

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
.post(addReaction)

// /api/thoughts/:thoughtId/reactions/:reactionId

router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction)

module.exports = router;