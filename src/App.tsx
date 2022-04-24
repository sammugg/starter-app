import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='/about' element={<>Nothing here yet</>} />
          <Route path='/dashboard' element={<>Nothing here yet</>} />
          <Route path='*' element={<>404 Not found</>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
