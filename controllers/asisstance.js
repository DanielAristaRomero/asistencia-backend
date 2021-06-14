const Asisstance = require("../models/Asisstance");

const getAllAsisstance = async(req, res = response) => {

    const allRegisters = await Asisstance.find();

    res.status(200).json({
        ok: true,
        allRegisters
    });
}

const createAsisstance = async(req, res = response) => {
    
    const assistance = await Asisstance(req.body);

    try {
        const assistanceSaved = await assistance.save();
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

const getAsisstance = async(req, res = response) => {

    const {employeeId, date} = req.body;

    try {
        const asisstances = await Asisstance.findOne({employeeId, date});
    
        res.status(200).json({
            ok: true,
            asisstances
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
        });
    }
 
    }

const updateAssistance = async(req, res = response) => {

    const {employeeId, date} = req.params;

    try {
        const asisstances = await Asisstance.findOne({employeeId, date});
        
        if(!asisstances) {
            return res.status(404).json({
                ok: false,
                message: 'No existe el registro'
            });
        }
        
        const newRegister = {
            ...req.body
        }

        const updateAsisstance = await Asisstance.findOneAndUpdate({employeeId, date}, newRegister, {new: true});

        res.status(200).json({
            ok: true,
            updateAsisstance
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
        });
    }
    
}


const deleteAsisstance = async(req, res = response) => {

    const {_id} = req.params; 

    try {
        
        await Asisstance.findByIdAndDelete(_id);

        res.status(200).json({
            ok: true,
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
        });
    }
}


module.exports = {
    getAllAsisstance,
    createAsisstance,
    getAsisstance, 
    updateAssistance,
    deleteAsisstance,
}