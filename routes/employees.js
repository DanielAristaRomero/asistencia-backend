/*
    Ruta: employees
    host + /api/employees
*/

const { Router } = require('express');
const { createEmployee, getEmployees, getEmployee } = require('../controllers/employees');

const router = Router();

router.post('/', createEmployee);
router.get('/', getEmployees);
router.post('/:_id', getEmployee);

module.exports = router;