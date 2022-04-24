import { ReactElement } from 'react';

import Home from 'components/Home/Home';

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
    title: 'ExtraPage',
    path: 'extra',
    element: <>Nothing here yet</>,
  },
] as Page[];
