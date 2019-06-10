import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../lib/styledComponents';
import { RouteComponentProps, withRouter } from 'react-router';

const FooterFlex = styled.div`
  display: flex;
  margin-top: auto;
  & > * {
    flex: 1;
    margin: .1em;
  }
`

interface CalcButtonProps extends RouteComponentProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const CalcButton: React.FC<CalcButtonProps> = ({ onClick, history }) => {
  return <FooterFlex>
    <StyledButton onClick={onClick}>Calculate</StyledButton>
    <StyledButton onClick={history.goBack} color="gray">Cancel</StyledButton>
  </FooterFlex>
}

export default withRouter(CalcButton)