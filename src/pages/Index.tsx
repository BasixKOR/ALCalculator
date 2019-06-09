import React, { useContext, useState, useEffect } from 'react';
import { AzurLaneContext, Server, isServer } from '../lib/azurlane';
import { SubmitLink } from '../lib/styledComponents';
import AkashiLayout from '../components/AkashiLayout';

const Index: React.FC = props => {
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
    <p>냥! 아래에서 서버랑 지휘관의 레벨을 입력해라냥!</p>
      <input name="level" type="number" value={level} onChange={levelHandler} placeholder="레벨" />
      <select name="server" onChange={serverHandler}>
        <option value="EN">English (Global)</option>
        <option value="JP">Japanese</option>
        <option value="CN">Chinese</option>
        <option value="KR">Korean</option>
      </select>
      <SubmitLink to="/menu">시작</SubmitLink>
  </AkashiLayout>
}

export default Index