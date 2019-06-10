import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../lib/styledComponents';

const FooterFlex = styled.div`
  display: flex;
  margin-top: auto;
  & > * {
    flex: 1;
    margin: .1em;
  }
`

interface CalcButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const CalcButton: React.FC<CalcButtonProps> = ({ onClick }) => {
  return <FooterFlex>
    <StyledButton onClick={onClick}>Calculate</StyledButton>
    <StyledButton onClick={window.history.back} color="gray">Cancel</StyledButton>
  </FooterFlex>
}

export default CalcButton