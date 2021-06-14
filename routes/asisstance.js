/*
    Ruta: asisstance,
    host + /api/asisstance
*/

const { Router } = require('express');
const { createAsisstance, getAsisstance, updateAssistance, getAllAsisstance, deleteAsisstance } = require('../controllers/asisstance');

const router = Router();

router.get('/', getAllAsisstance);
router.post('/', createAsisstance);
router.post('/search', getAsisstance);
router.put('/:date&:employeeId', updateAssistance);
router.delete('/:_id', deleteAsisstance);

module.exports = router;