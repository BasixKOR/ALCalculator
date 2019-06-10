import React from 'react';
import akashi from '../res/akashi.png'
import { Flex } from '../lib/styledComponents';
import { RouteComponentProps, withRouter } from 'react-router';

const AkashiLayout: React.FC<RouteComponentProps> = ({ children, history }) => (
  <Flex>
    <img src={akashi} alt="Akashi" onClick={e => history.push('/')}/>
    <div className="content">
      {children}
    </div>
  </Flex>
)

export default withRouter(AkashiLayout)