import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Page1 from "./pages/Page1.js";   // Добавляем расширение .js
import Page2 from "./pages/Page2.js";   // Добавляем расширение .js
import Page3 from "./pages/Page3.js";   // Добавляем расширение .js
import Page4 from "./pages/Page4.js";   // Добавляем расширение .js
import Page5 from "./pages/Page5.js";   // Добавляем расширение .js
import Page6 from "./pages/Page6.js";   // Добавляем расширение .js
import StarsBackground from "./components/StarsBackground.js";   // Добавляем расширение .js
import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
       <StarsBackground /> {/* Вставляем анимацию звезд */} 
        <nav className="sticky-navbar">
          <ul className="nav-links">
            <li>
              <Link to="/page1">Кнопка1</Link>
            </li>
            <li>
              <Link to="/page2">Кнопка2</Link>
            </li>
            <li>
              <Link to="/page3">Кнопка3</Link>
            </li>
            <li>
              <Link to="/page4">Кнопка4</Link>
            </li>
            <li>
              <Link to="/page5">Кнопка5</Link>
            </li>
            <li>
              <Link to="/page6">Кнопка6</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
