import React, { useContext } from 'react'
import { AzurLaneContext } from '../lib/azurlane';
import { Route, RouteChildrenProps, Redirect } from 'react-router';

interface ALRouteInterface {
  component: React.ComponentType
}

const ALRoute: React.FC<ALRouteInterface> = props => {
  const azurlane = useContext(AzurLaneContext)

  return <Route render={ _ =>
    isNaN(azurlane.level) && azurlane.server === null ? 
    (
      <Redirect to={{
        pathname: "/",
        state: { from: _.location }
      }} />
    ) : 
    (
      <props.component {..._} />
    )
  } />
}

export default ALRoute