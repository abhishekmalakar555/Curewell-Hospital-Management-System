const db = require('../config/db');


//GetAllDoctors
const GetAllDoctors = (req, res) => {
    const query = 'SELECT * FROM Doctor';

    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json(null);
        }
        res.json(result);
    });
};



//AddDoctor
const AddDoctor = (req, res) => {
    const { DoctorName } = req.body;

    if (!DoctorName) {
        return res.json(false);
    }

    const query = 'INSERT INTO Doctor (DoctorName) VALUES (?)';

    db.query(query, [DoctorName], (err, result) => {
        if (err) {
            console.log(err);
            return res.json(false);
        }
        res.json(true);
    });
};



//UpdateDoctorDetails
const UpdateDoctorDetails = (req, res) => {
    const { DoctorID, DoctorName } = req.body;

    if (!DoctorID || !DoctorName) {
        return res.json(false);
    }

    const query = 'UPDATE Doctor SET DoctorName = ? WHERE DoctorID = ?';

    db.query(query, [DoctorName, DoctorID], (err, result) => {
        if (err) {
            console.log(err);
            return res.json(false);
        }
        res.json(true);
    });
};



//DeleteDoctor
const DeleteDoctor = (req, res) => {
    const { DoctorID } = req.body;

    if (!DoctorID) {
        return res.json(false);
    }

    const query = 'DELETE FROM Doctor WHERE DoctorID = ?';

    db.query(query, [DoctorID], (err, result) => {
        if (err) {
            console.log(err);
            return res.json(false);
        }
        res.json(true);
    });
};




//GetAllSpecializations
const GetAllSpecializations = (req, res) => {
    const query = 'SELECT * FROM Specialization';

    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json(null);
        }
        res.json(result);
    });
};



//GetAllSurgeryTypeForToday
const GetAllSurgeryTypeForToday = (req, res) => {
    const query = `
        SELECT * FROM Surgery
        WHERE SurgeryDate = CURDATE()
    `;

    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json(null);
        }
        res.json(result);
    });
};



//UpdateSurgery
const UpdateSurgery = (req, res) => {
    const { SurgeryID, StartTime, EndTime } = req.body;

    if (!SurgeryID || !StartTime || !EndTime) {
        return res.json(false);
    }

    if (StartTime >= EndTime) {
        return res.json(false);
    }

    const query = `
        UPDATE Surgery 
        SET StartTime = ?, EndTime = ?
        WHERE SurgeryID = ?
    `;

    db.query(query, [StartTime, EndTime, SurgeryID], (err, result) => {
        if (err) {
            console.log(err);
            return res.json(false);
        }
        res.json(true);
    });
};



//GetDoctorsBySpecialization
const GetDoctorsBySpecialization = (req, res) => {
    const { SpecializationCode } = req.params;

    const query = `
        SELECT d.*
        FROM Doctor d
        JOIN DoctorSpecialization ds 
        ON d.DoctorID = ds.DoctorID
        WHERE ds.SpecializationCode = ?
    `;

    db.query(query, [SpecializationCode], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json(null);
        }
        res.json(result);
    });
};



module.exports = {
    GetAllDoctors,
    AddDoctor,
    UpdateDoctorDetails,
    DeleteDoctor,
    GetAllSpecializations,
    GetAllSurgeryTypeForToday,
    UpdateSurgery,
    GetDoctorsBySpecialization
};