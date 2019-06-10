import React, { useContext, useState } from "react";
import { AzurLaneContext, isShipsCount } from "../../lib/azurlane";
import AkashiLayout from "../AkashiLayout";
import CalcButton from "../CalcButton";

const Training: React.FC = props => {
  const azurlane = useContext(AzurLaneContext)
  const [comfort, setComfort] = useState(NaN)
  const [buff, setBuff] = useState(NaN)
  const [ships, setShips] = useState(NaN)
  const [result, setResult] = useState(0)
  const [enoughSupplies, setEnoughSupplies] = useState(true)
  
  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    if(!isShipsCount(ships)) return
    setResult(azurlane.calculateTrainingExp(comfort, buff, ships, !enoughSupplies))
  }

  return <AkashiLayout>
    <p>Your level: {azurlane.level}, Your server: {azurlane.server}</p>
    <input type="number" value={comfort} onChange={e => setComfort(parseInt(e.target.value))} placeholder="Comfort" />
    <input type="number" value={buff} onChange={e => setBuff(parseInt(e.target.value))} placeholder="Food Buffs" />
    <input type="number" value={ships} onChange={e => setShips(parseInt(e.target.value))} placeholder="Number of ships" />
    <div>
      <input type="checkbox" id="enoughSupplies" checked={enoughSupplies} onChange={e => setEnoughSupplies(e.target.checked)}/>
      <label>Is the supplies enough?</label>
    </div>
    <h1>{result} EXP/hour</h1>
    <CalcButton onClick={onClick} />
  </AkashiLayout>
}

export default Training