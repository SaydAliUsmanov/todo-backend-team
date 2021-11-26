const { Router } = require('express');

const { importantsController } = require('../controllers/importants.controller');

const router = Router();

router.get('/', importantsController.getImportants);
router.post('/', importantsController.create);
router.delete('/:id', importantsController.remove);
router.patch('/:id', importantsController.edit);

module.exports = router;
