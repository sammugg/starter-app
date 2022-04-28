import { Provider as StoreProvider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Home from 'components/Home';
import Layout from 'components/Layout/Layout';
import NewPage from 'components/NewPage';
import { store } from 'store';

const APP_TITLE = 'Starter App';

export const setPageTitle = (title: string) => {
  document.title = `${title} | ${APP_TITLE}`;
};

function App() {
  return (
    <StoreProvider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='new-page' element={<NewPage />} />
            <Route path='*' element={<>404 Not found</>} />
          </Route>
        </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;
