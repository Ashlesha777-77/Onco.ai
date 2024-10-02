// src/components/CancerChart.js
import React from 'react';
import './PageStyles.css';
import { Bar, Pie } from 'react-chartjs-2'; // Importing Bar and Pie charts
import { Chart, registerables } from 'chart.js'; // Importing Chart.js and registerables

// Register all necessary components from Chart.js
Chart.register(...registerables);

const CancerChart = () => {
  // Sample data for the bar chart
  const barData = {
    labels: ['Breast Cancer', 'Lung Cancer', 'Cervical Cancer', 'Uterine Cancer', 'Ovarian Cancer'],
    datasets: [
      {
        label: 'Cases per 100,000 Women',
        data: [125.4, 30.2, 9.1, 11.8, 9.5], // Example values
        backgroundColor: 'rgba(60, 91, 193, 0.5)',
        borderColor: 'rgba(60, 91, 193, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Sample data for the pie chart
  const pieData = {
    labels: ['Breast Cancer', 'Lung Cancer', 'Cervical Cancer', 'Others'],
    datasets: [
      {
        data: [58, 18, 10, 14], // Example distribution
        backgroundColor: [
          'rgba(60, 91, 193, 0.6)',
          'rgba(1, 104, 255, 0.6)',
          'rgba(50, 168, 82, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options for the charts
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Cases',
        },
      },
    },
  };

  return (
    <div className="page-container">
      <h2>Cancer Statistics for Women</h2>
      <p className="page-description">
        This page illustrates the prevalence and distribution of various cancers affecting women.
      </p>

      <div className="chart-container">
        <h3>Bar Chart: Cases per 100,000 Women</h3>
        <Bar data={barData} options={options} />
      </div>

      <div className="chart-container">
        <h3>Pie Chart: Cancer Distribution</h3>
        <Pie data={pieData} options={{ responsive: true }} />
      </div>

      <div className="data-table">
        <h3>Cancer Data Table</h3>
        <table>
          <thead>
            <tr>
              <th>Cancer Type</th>
              <th>Cases per 100,000 Women</th>
              <th>5-Year Survival Rate (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Breast Cancer</td>
              <td>125.4</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Lung Cancer</td>
              <td>30.2</td>
              <td>19</td>
            </tr>
            <tr>
              <td>Cervical Cancer</td>
              <td>9.1</td>
              <td>66</td>
            </tr>
            <tr>
              <td>Uterine Cancer</td>
              <td>11.8</td>
              <td>81</td>
            </tr>
            <tr>
              <td>Ovarian Cancer</td>
              <td>9.5</td>
              <td>47</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CancerChart;
