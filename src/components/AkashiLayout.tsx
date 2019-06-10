import React from 'react';
import { Flex } from '../lib/styledComponents';

const AkashiLayout: React.FC = ({ children }) => (
  <Flex>
    <img src="/akashi.png" alt="Akashi"/>
    <div className="content">
      {children}
    </div>
  </Flex>
)

export default AkashiLayout