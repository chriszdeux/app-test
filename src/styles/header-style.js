import styled from 'styled-components';
import { devices } from '../constant/break-points';

export const Header = styled.header`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  @media ${devices.laptop} {
    width: 80%;
    margin: 0 auto;
  }
`