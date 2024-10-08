import { AppRoutes } from '@/shared/const/AppRoutes';
import { PageContainer } from '@/shared/ui/PageContainer';
import { RefetchButton } from '@/shared/ui/RefetchButton';
import { AppBar, Toolbar, Typography, styled } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { NavBarProps } from '../model/interfaces';

export const NavBar: FC<NavBarProps> = ({ entity, query }) => {
  return (
    <StyledAppBar elevation={1}>
      <PageContainer>
        <StyledToolbar variant='dense'>
          <StyledTypography>
            <Link to={AppRoutes.HOME}>HackerNews</Link>
          </StyledTypography>
          {entity && query && <RefetchButton entity={entity} query={query} />}
        </StyledToolbar>
      </PageContainer>
    </StyledAppBar>
  );
};

const StyledAppBar = styled(AppBar)`
  position: sticky;
`;

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  gap: theme.spacing(1),
  display: 'flex',
  justifyContent: 'space-between',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('xl')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    fontSize: '1.5rem',
  },
  fontSize: '1.5rem',
  fontWeight: 800,
}));
