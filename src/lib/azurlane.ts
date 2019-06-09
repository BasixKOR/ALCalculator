import React from "react";

export enum Server { EN = 'EN', JP = 'JP', KR = 'KR', CN = 'CN' }

export default class AzurLaneCalculator {
  constructor(public level: number, public server: Server = Server.EN) {
  }

  private calculateModifier(ships: ShipsCount): Modifier {
    switch(ships) {
      case 1: return 1.0
      case 2: return 0.9
      case 3: return 0.8
      case 4: return 0.7
      case 5: return 0.64
    }
  }
  /**
   * Calculates the EXP per hour while training.
   * Full formula can be seen here: https://azurlane.koumakan.jp/Living_Area#Training
   * 
   * @param comfort 
   * @param foodbuff 
   * @param ships 
   * @param noSupplies 
   */
  calculateTrainingExp(comfort: number, foodbuff: number, ships: ShipsCount, noSupplies: boolean = false): number {
    let modifier: Modifier = this.calculateModifier(ships)
    let modifiedExpBase = 240 * modifier
    let modifiedLevelExp = this.level / 20 + 1
    let modifiedComfortExp = comfort / (comfort + 100) + 1
    let noSuppliesOption = noSupplies ? 0.25 : 1

    return modifiedExpBase * modifiedLevelExp * modifiedComfortExp * noSuppliesOption
  }
}

// Type definitions for Azur Lane
export type ShipsCount = 1 | 2 | 3 | 4 | 5
export type Modifier = 1.0 | 0.9 | 0.8 | 0.7 | 0.64

// Export some utils
export const AzurLaneContext = React.createContext<AzurLaneCalculator>(new AzurLaneCalculator(NaN)) // TODO Fix it with better way to give it a better defalut value
export function isServer(x: string): x is Server {
  return x in Server
}