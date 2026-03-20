import React, { useState, useEffect } from 'react';
import { GetAllDoctors, UpdateDoctorDetails as updateDoctorAPI } from '../services/curewell.service';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/common.css';

function UpdateDoctor() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [DoctorName, setDoctorName] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchDoctor();
    }, []);

    const fetchDoctor = async () => {
        const res = await GetAllDoctors();
        const doc = res.data.find(d => d.DoctorID == id);
        if (doc) setDoctorName(doc.DoctorName);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (!DoctorName) {
            setMessage("Doctor name required");
            return;
        }

        const res = await updateDoctorAPI({
            DoctorID: parseInt(id),
            DoctorName
        });

        if (res.data) {
            setMessage("Updated successfully");
            setTimeout(() => navigate('/doctors'), 1000);
        } else {
            setMessage("Update failed");
        }
    };

    return (
        <div className="container">
            <h2>Update Doctor</h2>

            <form className="form" onSubmit={handleUpdate}>
                
                <div className="form-group">
                    <label>Doctor ID</label>
                    <input type="text" value={id} disabled />
                </div>

                <div className="form-group">
                    <label>Doctor Name</label>
                    <input
                        type="text"
                        value={DoctorName}
                        onChange={(e) => setDoctorName(e.target.value)}
                    />
                </div>

                <button className="btn">Update</button>
            </form>

            <p>{message}</p>
        </div>
    );
}

export default UpdateDoctor;