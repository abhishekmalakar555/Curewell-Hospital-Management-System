import React, { useEffect, useState } from 'react';
import { GetAllDoctors, DeleteDoctor } from '../services/curewell.service';
import { useNavigate } from 'react-router-dom';
import '../styles/common.css';

function ViewDoctors() {
    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {
        try {
            const res = await GetAllDoctors();
            setDoctors(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleDelete = async (id) => {
        try {
            const res = await DeleteDoctor({ DoctorID: id });
            if (res.data) fetchDoctors();
            else alert("Cannot delete doctor (linked to surgery)");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container">
            <h2>Doctors List</h2>

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((doc) => (
                        <tr key={doc.DoctorID}>
                            <td>{doc.DoctorID}</td>
                            <td>{doc.DoctorName}</td>
                            <td>
                                <button 
                                    className="btn edit-btn"
                                    onClick={() => navigate(`/update-doctor/${doc.DoctorID}`)}
                                >
                                    Edit
                                </button>

                                <button 
                                    className="btn delete-btn"
                                    onClick={() => handleDelete(doc.DoctorID)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewDoctors;