import React, { useEffect, useState } from 'react';
import { GetDoctorsBySpecialization } from '../services/curewell.service';
import { useParams } from 'react-router-dom';
import '../styles/common.css';

function DoctorsBySpecialization() {
    const { id } = useParams();
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetchDoctors();
    }, [id]);

    const fetchDoctors = async () => {
        try {
            const res = await GetDoctorsBySpecialization(id);
            console.log("DOCTORS DATA:", res.data);
            setDoctors(res.data);
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
                    </tr>
                </thead>

                <tbody>
                    {doctors.length > 0 ? (
                        doctors.map((doc) => (
                            <tr key={doc.DoctorID}>
                                <td>{doc.DoctorID}</td>
                                <td>{doc.DoctorName}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2">No doctors found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default DoctorsBySpecialization;