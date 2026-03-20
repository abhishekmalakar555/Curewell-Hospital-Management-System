import React, { useEffect, useState } from 'react';
import { GetAllSurgeryTypeForToday } from '../services/curewell.service';
import { useNavigate } from 'react-router-dom';
import '../styles/common.css';

function ViewTodaySurgery() {
    const [surgeries, setSurgeries] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchSurgeries();
    }, []);

    const fetchSurgeries = async () => {
        try {
            const res = await GetAllSurgeryTypeForToday();
            setSurgeries(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container">
            <h2>Today's Surgeries</h2>

            <table className="table">
                <thead>
                    <tr>
                        <th>Surgery ID</th>
                        <th>Doctor ID</th>
                        <th>Date</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {surgeries.map((s) => (
                        <tr key={s.SurgeryID}>
                            <td>{s.SurgeryID}</td>
                            <td>{s.DoctorID}</td>
                            <td>{new Date(s.SurgeryDate).toLocaleDateString()}</td>
                            <td>{s.StartTime}</td>
                            <td>{s.EndTime}</td>
                            <td>{s.SurgeryCategory}</td>
                            <td>
                                <button
                                    className="btn edit-btn"
                                    onClick={() => navigate(`/update-surgery/${s.SurgeryID}`)}
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewTodaySurgery;