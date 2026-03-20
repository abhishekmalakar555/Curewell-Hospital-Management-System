const express = require('express');
const router = express.Router();

const {
    GetAllDoctors,
    AddDoctor,
    UpdateDoctorDetails,
    DeleteDoctor,
    GetAllSpecializations,
    GetAllSurgeryTypeForToday,
    UpdateSurgery,
    GetDoctorsBySpecialization
} = require('../controllers/curewellController');

router.get('/doctors', GetAllDoctors);
router.post('/doctors', AddDoctor);
router.put('/doctors', UpdateDoctorDetails);
router.delete('/doctors', DeleteDoctor);

router.get('/specializations', GetAllSpecializations);

router.get('/surgeries/today', GetAllSurgeryTypeForToday);
router.put('/surgeries', UpdateSurgery);

router.get('/doctors/specialization/:SpecializationCode', GetDoctorsBySpecialization);

module.exports = router;