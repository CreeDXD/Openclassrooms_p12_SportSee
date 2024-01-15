import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import PageErreur from './pages/PageErreur';
import Test from './test/test'

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <Router>      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:id" element={<Home />} />
        <Route exact path="/test" element={<Test />} />
        <Route path="*" element={<PageErreur />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
