import React from 'react';
import { Flex } from '../lib/styledComponents';
import { RouteComponentProps, withRouter } from 'react-router';

const AkashiLayout: React.FC<RouteComponentProps> = ({ children, history }) => (
  <Flex>
    <img src="/akashi.png" alt="Akashi" onClick={e => history.push('/')}/>
    <div className="content">
      {children}
    </div>
  </Flex>
)

export default withRouter(AkashiLayout)