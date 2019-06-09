import React from 'react';
import akashi from '../res/akashi.png'
import { Flex } from '../lib/styledComponents';

const AkashiLayout: React.FC = ({ children }) => (
  <Flex>
    <img src={akashi} alt="Akashi"/>
    <div className="content">
      {children}
    </div>
  </Flex>
)

export default AkashiLayout