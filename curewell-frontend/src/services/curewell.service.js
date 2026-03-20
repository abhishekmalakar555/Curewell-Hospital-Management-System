import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const GetAllDoctors = () => {
    return axios.get(`${BASE_URL}/doctors`);
};

export const AddDoctor = (data) => {
    return axios.post(`${BASE_URL}/doctors`, data);
};

export const UpdateDoctorDetails = (data) => {
    return axios.put(`${BASE_URL}/doctors`, data);
};

export const DeleteDoctor = (data) => {
    return axios.delete(`${BASE_URL}/doctors`, { data });
};

export const GetAllSpecializations = () => {
    return axios.get(`${BASE_URL}/specializations`);
};

export const GetAllSurgeryTypeForToday = () => {
    return axios.get(`${BASE_URL}/surgeries/today`);
};

export const UpdateSurgery = (data) => {
    return axios.put(`${BASE_URL}/surgeries`, data);
};

export const GetDoctorsBySpecialization = (code) => {
    return axios.get(`${BASE_URL}/doctors/specialization/${code}`);
};