import React, { useEffect, useState } from 'react';
import { GetAllSpecializations } from '../services/curewell.service';
import { useNavigate } from 'react-router-dom';
import '../styles/common.css';

function ViewSpecialization() {
    const [specializations, setSpecializations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchSpecializations();
    }, []);

    const fetchSpecializations = async () => {
        try {
            const res = await GetAllSpecializations();
            console.log("SPECIALIZATION DATA:", res.data);
            setSpecializations(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container">
            <h2>Specializations</h2>

            <table className="table">
                <thead>
                    <tr>
                        <th>CODE</th>
                        <th>Specialization</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {specializations.map((sp) => (
                        <tr key={sp.SpecializationCode}>
                            <td>{sp.SpecializationCode}</td>
                            <td>{sp.SpecializationName}</td>
                            <td>
                                <button
                                    className="btn edit-btn"
                                    onClick={() =>
                                        navigate(`/doctors-by-specialization/${sp.SpecializationCode}`)
                                    }
                                >
                                    View Doctors
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewSpecialization;