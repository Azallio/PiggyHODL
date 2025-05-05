import getData from "../api/requests"
import { JSX, ReactElement } from "react"

import GetUserScore from "./singleUserScore"

export type Pretendent = {
  id: number,
  username: string,
  pigsAmount: number,
  ticketsAmount: number,
  referrals: number
}

// export async function addPretendentToScoreboard() {
//   const itemList = await getPretendentArray().then((res)=>{return res});
//   console.log(itemList)
//   return itemList;
// }

export default async function getPretendentArray() {
  const itemList = await getData()
    .then((res) => {
      if (typeof res === "string") {
        const LoadingBar = <span>Loading...</span>
        return [LoadingBar]
      } else {
        const sortListOfPret = res.data.items.sort((a: Pretendent, b: Pretendent) => {
          if (a.pigsAmount !== b.pigsAmount) {
            return b.pigsAmount - a.pigsAmount;
          } else {
            return a.id - b.id
          }
        })
        const pretendentArray: JSX.Element[] = sortListOfPret.map((item: Pretendent, index: number) => {
          return GetUserScore(item, ++index);
        })
        return pretendentArray
      }
    })
  return itemList
}
