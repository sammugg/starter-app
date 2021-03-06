import { useEffect } from 'react';

import { setPageTitle } from 'App';
import logo from 'assets/logo.svg';

import './index.css';

function Home() {
  useEffect(() => setPageTitle('Home'));

  return (
    <div className='Home'>
      <div className='Home-header'>
        <img src={logo} className='Home-logo' alt='logo' />
        <p>
          Edit
          {' '}
          <code>src/Home.tsx</code>
          {' '}
          and save to reload.
        </p>
        <a
          className='Home-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default Home;
