// 


// src/components/PredictionForm.js
import React, { useState } from 'react';
import './PageStyles.css'; // For page-wide styling

const PredictionForm = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    symptoms: '',
    medicalHistory: '',
    familyHistory: '',
    lifestyleFactors: '',
    genomicImage: null,
    tumorSize: '',
    tumorType: '',
    biopsyResults: '',
    bloodTestResults: '',
    geneticMarkers: '',
    medications: '',
    allergies: '',
    treatmentHistory: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Placeholder for form submission logic
    // Here, you would typically send formData to your backend
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({ ...formData, [name]: type === 'file' ? files[0] : value });
  };

  return (
    <div className="page-container">
      <h2>Early Cancer Detection Form</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          onChange={handleChange}
          placeholder="Enter age..."
          required
        />

        <label>Gender:</label>
        <select name="gender" onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label>Symptoms:</label>
        <textarea
          name="symptoms"
          onChange={handleChange}
          placeholder="Describe symptoms..."
          required
        />

        <label>Medical History:</label>
        <textarea
          name="medicalHistory"
          onChange={handleChange}
          placeholder="Previous medical conditions..."
          required
        />

        <label>Family History of Cancer:</label>
        <textarea
          name="familyHistory"
          onChange={handleChange}
          placeholder="Family history details..."
          required
        />

        <label>Lifestyle Factors:</label>
        <textarea
          name="lifestyleFactors"
          onChange={handleChange}
          placeholder="e.g., Smoking, Alcohol consumption..."
          required
        />

        <label>Upload Genomic Image:</label>
        <input
          type="file"
          name="genomicImage"
          accept="image/*"
          onChange={handleChange}
          required
        />

        <label>Tumor Size (if known, in cm):</label>
        <input
          type="number"
          name="tumorSize"
          onChange={handleChange}
          placeholder="Enter tumor size..."
        />

        <label>Tumor Type (if known):</label>
        <input
          type="text"
          name="tumorType"
          onChange={handleChange}
          placeholder="e.g., benign, malignant..."
        />

        <label>Biopsy Results (if available):</label>
        <textarea
          name="biopsyResults"
          onChange={handleChange}
          placeholder="Enter biopsy results..."
        />

        <label>Blood Test Results (key metrics):</label>
        <textarea
          name="bloodTestResults"
          onChange={handleChange}
          placeholder="Enter key blood test metrics..."
        />

        <label>Genetic Markers (if known):</label>
        <textarea
          name="geneticMarkers"
          onChange={handleChange}
          placeholder="Enter genetic markers..."
        />

        <label>Current Medications:</label>
        <textarea
          name="medications"
          onChange={handleChange}
          placeholder="List current medications..."
        />

        <label>Allergies:</label>
        <textarea
          name="allergies"
          onChange={handleChange}
          placeholder="Known allergies..."
        />

        <label>Previous Treatments (if any):</label>
        <textarea
          name="treatmentHistory"
          onChange={handleChange}
          placeholder="List previous treatments..."
        />

        <button className="primary-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PredictionForm;
