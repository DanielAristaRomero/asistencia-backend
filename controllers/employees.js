const Employee = require("../models/Employee");

const createEmployee = async(req, res = response) => {
    
    const employee = new Employee(req.body);

    try {
        const employeeSaved = await employee.save();
        res.status(200).json({
            ok: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
        });
    }
}

const getEmployees = async(req, res = response) => {
    
    const employees = await Employee.find();

    res.status(200).json({
        ok: true,
        employees
    });
}

const getEmployee = async(req, res = response) => {
    
    const employee = await Employee.findOne(req.params);

    res.status(200).json({
        ok: true,
        employee
    });
}


module.exports = {
    createEmployee,
    getEmployees,
    getEmployee,
}