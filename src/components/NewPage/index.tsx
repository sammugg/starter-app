import {
  Button,
  Container,
  Icon,
  Paper,
  styled,
} from '@mui/material';
import { useCallback, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setPageTitle } from 'App';
import { AppDispatch } from 'store';
import { getUpdatedText } from 'store/BaconPigsum/actionCreators';
import {
  getBaconText,
  getHasError,
} from 'store/BaconPigsum/selectors';

import './index.css';

const StyledPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  minHeight: 100,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: theme.spacing(2),
  padding: theme.spacing(2),
}));

export default function NewPage() {
  const hasError = useSelector(getHasError);
  const text = useSelector(getBaconText);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    setPageTitle('New Page');
  }, []);

  const handleClickRegen = useCallback(
    () => dispatch(getUpdatedText()),
    [],
  );

  const paragraphs = useMemo(() => (
    text.map((section) => (
      <p key={`section-${Math.random()}`}>
        {hasError && (
          <Icon color='error'>error</Icon>
        )}
        {section}
      </p>
    ))
  ), [text, hasError]);

  return (
    <Container>
      <StyledPaper elevation={3}>
        <Button onClick={handleClickRegen}>
          Click to (re)generate text.
        </Button>
        {paragraphs}
      </StyledPaper>
    </Container>
  );
}
