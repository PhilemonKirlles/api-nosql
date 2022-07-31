const router = require('express').Router();

const {
    getThoughts,
    getThoughtByID,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require//('Something/controller');

// /api/thoughts/
router.route('/')
.get(getThoughts)

// api/thoughts/:userId
router.route('/:userId')
.post(addThought)

// /api/thoughts/:thoughtId
router.route('')
.get(getThoughtByID)
.put(updateThought)
.delete(deleteThought)

// /api/thoughts/:thoughtId/reactions
router.route('')
.post(addReaction)

// /api/thoughts/:thoughtId/reactions/:reactionId

router.route('')
.delete(deleteReaction)

module.exports = router;