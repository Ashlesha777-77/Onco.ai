// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './components/Home';
// import CancerChart from './components/CancerChart';
// import PredictionForm from './components/PredictionForm';
// import DoctorConsultancy from './components/DoctorConsultancy';
// import Research from './components/Research';
// import Prevention from './components/Prevention';
// import Donation from './components/Donation';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <div className="content">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/cancer-chart" element={<CancerChart />} />
//           <Route path="/prediction" element={<PredictionForm />} />
//           <Route path="/consultancy" element={<DoctorConsultancy />} />
//           <Route path="/research" element={<Research />} />
//           <Route path="/prevention" element={<Prevention />} />
//           <Route path="/donation" element={<Donation />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CancerChart from './components/CancerChart';
import PredictionForm from './components/PredictionForm';
import DoctorConsultancy from './components/DoctorConsultancy';
import Research from './components/Research';
import Prevention from './components/Prevention';
import Donation from './components/Donation';
import './App.css'; // Additional global styles

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cancer-chart" element={<CancerChart />} />
          <Route path="/prediction" element={<PredictionForm />} />
          <Route path="/consultancy" element={<DoctorConsultancy />} />
          <Route path="/research" element={<Research />} />
          <Route path="/prevention" element={<Prevention />} />
          <Route path="/donation" element={<Donation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

