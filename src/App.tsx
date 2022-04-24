import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import pages from 'pages';

const APP_TITLE = 'Starter App';

export const setPageTitle = (title: string) => {
  document.title = `${title} | ${APP_TITLE}`;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          {pages.map((page) => (
            <Route
              key={page.title}
              index={!!page.isIndex}
              path={page.path}
              element={page.element}
            />
          ))}
          <Route path='*' element={<>404 Not found</>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
