import React, { useContext, useState, useEffect } from 'react';
import { AzurLaneContext, Server, isServer } from '../lib/azurlane';
import AkashiLayout from '../components/AkashiLayout';
import styled from 'styled-components';
import { StyledLink } from '../lib/styledComponents';

export const SubmitLink = styled(StyledLink)`
  text-align: center;
  margin-top: auto;
`

const Index: React.FC = () => {
  const azurlane = useContext(AzurLaneContext)
  const [level, setLevel] = useState(NaN)
  const [server, setServer] = useState<Server>(Server.EN)

  useEffect(() => {
    azurlane.level = level
    azurlane.server = server
  })

  function levelHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setLevel(parseInt(event.target.value))
  }
  
  function serverHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    if(isServer(event.target.value)) setServer(event.target.value)
  }

  return <AkashiLayout>
    <p>Put your level and server, nya~</p>
    <input name="level" type="number" value={level} onChange={levelHandler} placeholder="Level" />
    <select name="server" onChange={serverHandler}>
      <option value="EN">English (Global)</option>
      <option value="JP">Japanese</option>
      <option value="CN">Chinese</option>
      <option value="KR">Korean</option>
    </select>
    <SubmitLink to="/menu">Start</SubmitLink>
  </AkashiLayout>
}

export default Index