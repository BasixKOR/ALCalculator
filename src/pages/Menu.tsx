import React from 'react'
import AkashiLayout from '../components/AkashiLayout';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RouteChildrenProps } from 'react-router';

const MenuItem = styled(Link)`
  width: 100%;
  background-color: dodgerblue;
  padding: .3em;
  font-size: 1.3em;
  color: white;
  text-decoration: none;
`

const Menu: React.FC<RouteChildrenProps> = props => {
  return <AkashiLayout {...props}>
    <MenuItem to="/calc/training">Training EXP</MenuItem>
    <MenuItem to="/calc/meowficer">Meowficer EXP</MenuItem>
  </AkashiLayout>
}

export default Menu