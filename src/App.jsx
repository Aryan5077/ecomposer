// src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from './NavBar'; 
// import ContactUs from './ContactUs';
// import SeasonalHoliday from './SeasonalHoliday';

// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<ContactUs />} />
//           <Route path="/SeasonalHoliday" element={<SeasonalHoliday/>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'; 
import ContactUs from './ContactUs';
import SeasonalHoliday from './SeasonalHoliday';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/SeasonalHoliday" element={<SeasonalHoliday/>} />
          <Route path="/" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
