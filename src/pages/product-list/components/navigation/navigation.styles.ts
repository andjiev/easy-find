import styled from 'styled-components';

import { Box, Button } from '@material-ui/core';

const StyledNavigation = styled(Box)`
  background-color: ${props => props.theme.palette.grey[300]};
  height: 100%;
  display: flex;
  flex-direction: column;

  ${props => props.theme.breakpoints.up('md')} {
    min-height: 100vh;
  }
`;
const StyledButton = styled(Button)`
  width: inherit;

  &:hover {
    background-color: gray;
  }
`;

export { StyledNavigation, StyledButton };