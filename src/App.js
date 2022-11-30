import { React } from 'react';

import NavbarComponent from './components/NavbarComponent';
import Main from './pages/Main';
import Jobboard from './pages/Jobboard';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/jobboard" element={<Jobboard /> } />
      </Routes>
    </Router>
  );
}

export default App;
