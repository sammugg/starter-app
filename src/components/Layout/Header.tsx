import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  useCallback,
  useState,
} from 'react';
import { Link } from 'react-router-dom';

const pages = [
  {
    title: 'Home',
    path: '',
  },
  {
    title: 'New Page',
    path: 'new-page',
  },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState<Element | null>(null);

  const handleOpenNavMenu = useCallback((event: any) => {
    setAnchorElNav(event.currentTarget as Element);
  }, []);

  const handleCloseNavMenu = useCallback(() => {
    setAnchorElNav(null);
  }, []);

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar
          disableGutters
          sx={{
            alignItems: { xs: 'center', sm: 'baseline' },
            justifyContent: { xs: 'center', sm: 'flex-start' },
          }}
        >
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              mr: { xs: 0, sm: 2 },
              order: { xs: 1, sm: 0 },
            }}
          >
            Starter App
          </Typography>

          <Box
            order={0}
            position='absolute'
            left={0}
            sx={{ display: { xs: 'flex', sm: 'none' } }}
          >
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', sm: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  component={Link}
                  key={page.title}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign='center'>{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            flexGrow={1}
            order={1}
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            {pages.map((page) => (
              <Button
                component={Link}
                key={page.title}
                to={page.path}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
