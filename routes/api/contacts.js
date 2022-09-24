const express = require('express');
const ctrl = require('../../controllers/contacts');
const router = express.Router();

router.get('/', ctrl.getAll);

router.get('/:contactId', ctrl.getById);

router.post('/', ctrl.add);

router.delete('/:contactId', ctrl.removeById);

router.put('/:contactId', ctrl.updateById);

module.exports = router;
