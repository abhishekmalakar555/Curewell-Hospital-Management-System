import React, { useEffect, useState } from 'react';
import { GetAllSurgeryTypeForToday, UpdateSurgery as updateSurgeryAPI } from '../services/curewell.service';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/common.css';

function UpdateSurgery() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [surgery, setSurgery] = useState(null);
    const [StartTime, setStartTime] = useState('');
    const [EndTime, setEndTime] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchSurgery();
    }, []);

    const fetchSurgery = async () => {
        try {
            const res = await GetAllSurgeryTypeForToday();
            const s = res.data.find(item => item.SurgeryID == id);

            if (s) {
                setSurgery(s);
                setStartTime(s.StartTime);
                setEndTime(s.EndTime);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        // Validation
        if (!StartTime || !EndTime) {
            setMessage("All fields are required");
            return;
        }

        if (parseFloat(StartTime) >= parseFloat(EndTime)) {
            setMessage("Start time must be less than End time");
            return;
        }

        try {
            const res = await updateSurgeryAPI({
                SurgeryID: parseInt(id),
                StartTime: parseFloat(StartTime),
                EndTime: parseFloat(EndTime)
            });

            if (res.data) {
                setMessage("Surgery updated successfully");

                setTimeout(() => {
                    navigate('/surgeries');
                }, 1000);
            } else {
                setMessage("Update failed");
            }
        } catch (err) {
            console.log(err);
            setMessage("Server error");
        }
    };

    if (!surgery) return <p>Loading...</p>;

    return (
        <div className="container">
            <h2>Update Surgery</h2>

            <form className="form" onSubmit={handleUpdate}>

                <div className="form-group">
                    <label>Surgery ID</label>
                    <input type="text" value={surgery.SurgeryID} disabled />
                </div>

                <div className="form-group">
                    <label>Doctor ID</label>
                    <input type="text" value={surgery.DoctorID} disabled />
                </div>

                <div className="form-group">
                    <label>Date</label>
                    <input
                        type="text"
                        value={new Date(surgery.SurgeryDate).toISOString().split('T')[0]}
                        disabled
                    />
                </div>

                <div className="form-group">
                    <label>Category</label>
                    <input type="text" value={surgery.SurgeryCategory} disabled />
                </div>

                <div className="form-group">
                    <label>Start Time</label>
                    <input
                        type="number"
                        value={StartTime}
                        onChange={(e) => setStartTime(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>End Time</label>
                    <input
                        type="number"
                        value={EndTime}
                        onChange={(e) => setEndTime(e.target.value)}
                    />
                </div>

                <button className="btn">Update</button>
            </form>

            <p>{message}</p>
        </div>
    );
}

export default UpdateSurgery;