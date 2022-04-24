import {
  Container,
  Paper,
  styled,
} from '@mui/material';
import { useEffect } from 'react';

import { setPageTitle } from 'App';

import './index.css';

const StyledPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  minHeight: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: theme.spacing(2),
}));

function NewPage() {
  useEffect(() => setPageTitle('New Page'));

  return (
    <Container>
      <StyledPaper elevation={3}>
        Nothing here yet!
      </StyledPaper>
    </Container>
  );
}

export default NewPage;
