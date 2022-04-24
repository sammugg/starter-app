import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Home from 'components/Home/Home';
import Layout from 'components/Layout/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
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
