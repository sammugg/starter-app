import { ReactElement } from 'react';

import Home from 'components/Home';
import NewPage from 'components/NewPage';

interface Page {
  isIndex?: boolean
  title: string
  path: string
  element: ReactElement
}

export default [
  {
    isIndex: true,
    title: 'Home',
    path: '',
    element: <Home />,
  },
  {
    title: 'New Page',
    path: 'new-page',
    element: <NewPage />,
  },
] as Page[];
