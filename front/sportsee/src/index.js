import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import PageErreur from './pages/PageErreur';
import ChooseURL from './pages/ChooseURL';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router basename="/Openclassrooms_p12_SportSee/">      
      <Routes>
        <Route exact path="/" element={<ChooseURL />} />
        <Route exact path="/:id" element={<Home />} />
        <Route path="*" element={<PageErreur />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);