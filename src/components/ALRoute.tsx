import React, { useContext, Component } from 'react'
import { AzurLaneContext } from '../lib/azurlane';
import { Route, RouteChildrenProps, Redirect } from 'react-router';

interface ALRouteInterface extends RouteChildrenProps  {
  component: React.Component
}

const ALRoute: React.FC<ALRouteInterface> = props => {
  const azurlane = useContext(AzurLaneContext)

  return <Route render={ _ =>
    isNaN(azurlane.level) && azurlane.server === null ? 
    (
      <Redirect
        to={{
          pathname: "/",
          state: { from: props.location }
        }}
      />
    ) : 
    (
      <Component {..._} />
    )
  } />
}

export default ALRoute