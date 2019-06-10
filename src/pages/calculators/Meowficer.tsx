import React, { useContext, useState } from "react";
import { AzurLaneContext } from "../../lib/azurlane";
import AkashiLayout from "../../components/AkashiLayout";
import CalcButton from "../../components/CalcButton"

const Meowficer: React.FC = () => {
  const azurlane = useContext(AzurLaneContext);
  const [result, setResult] = useState(0);
  const [oil, setOil] = useState(NaN);
  const [exp, setExp] = useState(NaN);
  
  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    setResult(azurlane.calculateMeowficerExp(oil, exp))
  }

  // TODO Make the calculator provide EXP constant
  
  return <AkashiLayout>
    <input type="number" value={oil} onChange={e => setOil(e.target.valueAsNumber)} placeholder="Oil Usage for fleet"/>
    <input type="number" value={exp} onChange={e => setExp(e.target.valueAsNumber)} placeholder="Map EXP constant"/>
    <h1>{result} EXP</h1>
    <CalcButton onClick={onClick} />
  </AkashiLayout>
}

export default Meowficer