import styled from 'styled-components';

import { Box } from '@material-ui/core';

interface IStyledImage {
  img: string;
}
const StyledImage = styled(Box)`
  background-image: url(${(props: IStyledImage) => props.img});
  background-size: cover;
  width: 100%;
  height: 550px;
`;

export { StyledImage };
