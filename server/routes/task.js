const express = require('express');
const {getAllTask, createTask, getTask, updateTask, deleteTask, completeTask} = require('../controller/task');
const router = express.Router();

//-- Route creation way 1

// router.get('/', getAllTask);
// router.post('/', createTask);
// router.get('/:id', getTask);
// router.patch('/:id', updateTask);
// router.delete('/:id', deleteTask);

//-- Route creation way 1

router.route('/').get(getAllTask).post(createTask); 
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);
router.route('/complete/:id').patch(completeTask);

module.exports = router;