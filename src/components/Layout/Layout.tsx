import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <Box
      display='flex'
      height='100%'
      flexDirection='column'
    >
      <Box flex='0 1 auto'>
        <Header />
      </Box>
      <Box flex='1 0 auto'>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
