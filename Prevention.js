// src/components/Prevention.js
import React from 'react';
import './Prevention.css'; // Import your existing styles

const Prevention = () => {
  return (
    <div className="prevention page-container">
      <h2>Cancer Prevention</h2>
      <p>Learn about effective ways to prevent cancer and maintain a healthy lifestyle.</p>

      <section className="prevention-methods">
        <h3>Key Prevention Methods</h3>

        <ul className="prevention-list">
          <li>
            <h4>Healthy Diet</h4>
            <p>Consume a balanced diet rich in fruits, vegetables, and whole grains. Limit processed foods and red meats.</p>
          </li>
          <li>
            <h4>Regular Exercise</h4>
            <p>Engage in at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity each week.</p>
          </li>
          <li>
            <h4>Avoid Tobacco</h4>
            <p>Quitting smoking and avoiding tobacco products significantly lowers cancer risk.</p>
          </li>
          <li>
            <h4>Limit Alcohol Consumption</h4>
            <p>Drink alcohol in moderation, if at all. Limit to one drink per day for women and two drinks for men.</p>
          </li>
          <li>
            <h4>Sun Protection</h4>
            <p>Protect your skin from UV rays by wearing sunscreen, hats, and protective clothing.</p>
          </li>
          <li>
            <h4>Regular Screenings</h4>
            <p>Participate in routine screenings for early detection of cancer, such as mammograms and colonoscopies.</p>
          </li>
        </ul>
      </section>

      <section className="statistics-section">
        <h3>Statistics</h3>
        <p>Understanding cancer prevention statistics can help you take informed actions:</p>
        <ul className="statistics-list">
          <li>About 1 in 3 Americans will develop cancer in their lifetime.</li>
          <li>Increased physical activity can reduce the risk of several types of cancer by up to 50%.</li>
          <li>Approximately 20% of cancer cases are linked to obesity and physical inactivity.</li>
        </ul>
      </section>

      <section className="tips-section">
        <h3>Practical Tips</h3>
        <p>Here are some practical tips to incorporate into your daily routine:</p>
        <ul className="tips-list">
          <li>Prepare meals at home to control ingredients and portion sizes.</li>
          <li>Make exercise a part of your daily routine—take the stairs or walk instead of driving.</li>
          <li>Stay hydrated and choose water over sugary drinks.</li>
          <li>Stay informed about your family history and talk to your doctor about your risk factors.</li>
        </ul>
      </section>

      <section className="resources-section">
        <h3>Additional Resources</h3>
        <p>For more information, visit the following resources:</p>
        <ul className="resources-list">
          <li><a href="https://www.cancer.org/" target="_blank" rel="noopener noreferrer">American Cancer Society</a></li>
          <li><a href="https://www.cdc.gov/cancer/dcpc/prevention/index.htm" target="_blank" rel="noopener noreferrer">CDC - Cancer Prevention</a></li>
          <li><a href="https://www.nci.nih.gov/" target="_blank" rel="noopener noreferrer">National Cancer Institute</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Prevention;
