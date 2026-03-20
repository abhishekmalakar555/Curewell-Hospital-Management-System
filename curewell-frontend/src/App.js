import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import ViewDoctors from './components/ViewDoctors';
import AddDoctor from './components/AddDoctor';
import UpdateDoctor from './components/UpdateDoctor';
import ViewTodaySurgery from './components/ViewTodaySurgery';
import UpdateSurgery from './components/UpdateSurgery';
import ViewSpecialization from './components/ViewSpecialization';
import DoctorsBySpecialization from './components/DoctorsBySpecialization';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<ViewDoctors />} />

          <Route path="/doctors" element={<ViewDoctors />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/update-doctor/:id" element={<UpdateDoctor />} />
          <Route path="/doctors-by-specialization/:id" element={<DoctorsBySpecialization />} />
          <Route path="/specialization" element={<ViewSpecialization />} />

          <Route path="/surgeries" element={<ViewTodaySurgery />} />
          <Route path="/update-surgery/:id" element={<UpdateSurgery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;