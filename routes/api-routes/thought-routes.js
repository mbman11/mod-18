// Import the necessary dependencies and controllers
const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtsById,
    createThought,
    deleteThought,
    updateThoughtById,
    // createReaction,
    // deleteReaction,
} = require('../../controllers/thought-controller');

// same as user routes
router.route('/').get(getAllThoughts).post(createThought);

//find thought by id, update and delete 
router.route('/:thoughtId').get(getThoughtsById).put(updateThoughtById).delete(deleteThought);

// create reaction
// router.route('/:thoughtId/reactions').post(createReaction);


// router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;