// ---------------------------------------------------------------------------------------------------------------------------------------//
// src/components/DoctorConsultancy.js
import React, { useState } from 'react';
import './PageStyles.css';

// List of doctors with their information
const doctors = [
  {
    id: 1,
    name: "Dr. Siddhartha Mukherjee",
    specialization: "Oncologist, Cancer Researcher",
    photo: "https://example.com/photo1.jpg",  // Placeholder URL for photo
    degree: "MD, PhD in Oncology",
    expertise: "Leukemia and related blood cancers",
  },
  {
    id: 2,
    name: "Dr. Susan Love",
    specialization: "Breast Surgeon, Cancer Specialist",
    photo: "https://example.com/photo2.jpg",
    degree: "MD, Breast Cancer Specialist",
    expertise: "Breast Cancer",
  },
  {
    id: 3,
    name: "Dr. Jose Baselga",
    specialization: "Medical Oncologist, Researcher",
    photo: "https://example.com/photo3.jpg",
    degree: "MD, PhD in Oncology",
    expertise: "Breast Cancer",
  },
  {
    id: 4,
    name: "Dr. Jimmie Holland",
    specialization: "Psychiatrist, Cancer Treatment Specialist",
    photo: "https://example.com/photo4.jpg",
    degree: "MD, Psycho-Oncology",
    expertise: "Psychological aspects of cancer treatment",
  },
  {
    id: 5,
    name: "Dr. Nancy Davidson",
    specialization: "Medical Oncologist",
    photo: "https://example.com/photo5.jpg",
    degree: "MD, Breast Cancer Specialist",
    expertise: "Breast Cancer",
  },
  {
    id: 6,
    name: "Dr. Lori J. Pierce",
    specialization: "Radiation Oncologist",
    photo: "https://example.com/photo6.jpg",
    degree: "MD, PhD in Radiation Oncology",
    expertise: "Radiation Therapy for Breast Cancer",
  },
  {
    id: 7,
    name: "Dr. Elizabeth M. Jaffee",
    specialization: "Immunotherapy and Cancer Research",
    photo: "https://example.com/photo7.jpg",
    degree: "MD, Immuno-Oncology Specialist",
    expertise: "Pancreatic Cancer",
  },
  {
    id: 8,
    name: "Dr. Charles Sawyers",
    specialization: "Medical Oncologist",
    photo: "https://example.com/photo8.jpg",
    degree: "MD, Prostate Cancer Specialist",
    expertise: "Prostate Cancer",
  },
  {
    id: 9,
    name: "Dr. Harold Varmus",
    specialization: "Nobel Laureate, Cancer Geneticist",
    photo: "https://example.com/photo9.jpg",
    degree: "MD, PhD in Oncology",
    expertise: "Cancer Genetics",
  }
  // ,
  // {
  //   id: 10,
  //   name: "Dr. James Allison",
  //   specialization: "Immunotherapy Specialist, Nobel Laureate",
  //   photo: "https://example.com/photo10.jpg",
  //   degree: "PhD, Immuno-Oncology",
  //   expertise: "Melanoma and Lung Cancer",
  // }
];

const DoctorConsultancy = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    email: '',
    symptoms: '',
    appointmentTime: '',
    doctorId: '',
    videoConsultation: false
  });

  const handleDoctorSelect = (doctorId) => {
    setSelectedDoctor(doctorId);
    setAppointmentData({ ...appointmentData, doctorId });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Appointment booked successfully!');
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  const handleChange = (e) => {
    setAppointmentData({ ...appointmentData, [e.target.name]: e.target.value });
  };

  const handleVideoConsultationChange = () => {
    setAppointmentData({ ...appointmentData, videoConsultation: !appointmentData.videoConsultation });
  };

  return (
    <div className="page-container">
      <h2>Book Doctor Consultancy</h2>
      <h3>Select a Doctor</h3>

      {/* Doctor selection */}
      <div className="doctor-list">
        
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className={`doctor-card ${selectedDoctor === doctor.id ? 'selected' : ''}`}
            onClick={() => handleDoctorSelect(doctor.id)}
          >
            <img src={doctor.photo} alt={doctor.name} className="doctor-photo" />
            <div>
              <h4>{doctor.name}</h4>
              <p>{doctor.specialization}</p>
              <p><strong>Specialist in:</strong> {doctor.expertise}</p>
              <p><strong>Degree:</strong> {doctor.degree}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Appointment form */}
      <form className="form-container" onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input 
          type="text" 
          name="name" 
          placeholder="Enter your full name"
          value={appointmentData.name} 
          onChange={handleChange} 
          required 
        />

        <label>Email Address:</label>
        <input 
          type="email" 
          name="email" 
          placeholder="Enter your email" 
          value={appointmentData.email} 
          onChange={handleChange} 
          required 
        />

        <label>Symptoms (optional):</label>
        <textarea
          name="symptoms"
          placeholder="Describe your symptoms"
          value={appointmentData.symptoms}
          onChange={handleChange}
        />

        <label>Preferred Date & Time:</label>
        <input 
          type="datetime-local" 
          name="appointmentTime" 
          value={appointmentData.appointmentTime} 
          onChange={handleChange} 
          required 
        />

        <label>
          <input
            type="checkbox"
            checked={appointmentData.videoConsultation}
            onChange={handleVideoConsultationChange}
          />
          Video Consultation
        </label>

        <button className="primary-button" type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default DoctorConsultancy;
