const user = require('./user');
const thought = require('./thoughts');
// Exporting the User and Thought models as a single module for easy access in other parts of the application
module.exports = {thoughts, user};