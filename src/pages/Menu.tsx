import React, { useContext } from 'react'
import { AzurLaneContext } from '../lib/azurlane';
import AkashiLayout from '../AkashiLayout';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuItem = styled(Link)`
  width: 100%;
  background-color: dodgerblue;
  padding: .3em;
  font-size: 1.3em;
  color: white;
  text-decoration: none;
`

const Menu: React.FC = props => {
  let azurlane = useContext(AzurLaneContext)
  return <AkashiLayout>
    <MenuItem to="/calc/training">Training EXP</MenuItem>
  </AkashiLayout>
}

export default Menu