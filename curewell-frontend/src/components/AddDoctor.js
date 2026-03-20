import React, { useState } from 'react';
import { AddDoctor as addDoctorAPI } from '../services/curewell.service';
import { useNavigate } from 'react-router-dom';
import '../styles/common.css';

function AddDoctor() {
    const [DoctorName, setDoctorName] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!DoctorName.trim()) {
            setMessage("Doctor name is required");
            return;
        }

        const res = await addDoctorAPI({ DoctorName });

        if (res.data) {
            setMessage("Doctor successfully added");
            setTimeout(() => navigate('/'), 1000);
        } else {
            setMessage("Error adding doctor");
        }
    };

    return (
        <div className='container'>
            <h2>Add Doctor</h2>
            <form onSubmit={handleSubmit}>
                <input
                    value={DoctorName}
                    onChange={(e) => setDoctorName(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default AddDoctor;