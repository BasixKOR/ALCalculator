import React, { useState } from 'react'
import Index from './pages/Index'
import Menu from './pages/Menu'
import Training from './pages/calculators/Training';
import Meowficer from './pages/calculators/Meowficer';
import { BrowserRouter as Router, Route } from "react-router-dom"
import AzurLaneCalculator, { AzurLaneContext } from './lib/azurlane'
import styled from 'styled-components';

const Header = styled.header`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 1vmin);
  color: white;
`

const App: React.FC = () => {
  const [azurlane] = useState(new AzurLaneCalculator(NaN))

  return (
    <Router>
      <div className="App">
        <Header className="header">
          <h1>Azur Lane Calculator</h1>
        </Header>
        <AzurLaneContext.Provider value={azurlane}>
          <Route path="/" exact component={Index} />
          <Route path="/menu" component={Menu} />
          <Route path="/calc/training" component={Training} />
          <Route path="/calc/meowficer" component={Meowficer} />
        </AzurLaneContext.Provider>
      </div>
    </Router>
  );
}

export default App;
