import { Button, Typography, styled } from '@mui/material';
import { FC } from 'react';
import { toast } from 'react-toastify';
import { RefetchButtonProps } from '../model/ui/interfaces';

export const RefetchButton: FC<RefetchButtonProps> = ({ entity, query }) => {
  const { refetch, isSuccess, isError, isFetching } = query;
  const onClickHandler = async () => {
    await refetch();
    if (isSuccess) toast.success(`${entity} refreshed`);
    if (isError) toast.error('Something went wrong');
  };

  if (isError) return null;

  return (
    <StyledButton
      disabled={isFetching || isError}
      onClick={onClickHandler}
      variant='text'
    >
      <StyledTypography>refresh {entity}</StyledTypography>
    </StyledButton>
  );
};
const StyledButton = styled(Button)(() => ({
  padding: 0,
  color: 'white',
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('xl')]: {
    fontSize: '1.5rem',
  },
  fontSize: '1rem',
}));
