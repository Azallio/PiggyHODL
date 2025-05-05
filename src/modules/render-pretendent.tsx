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
        console.log(LoadingBar)
        return [LoadingBar]
      } else {
        const pretendentArray: JSX.Element[] = res.data.items.map((item: Pretendent) => {
          return GetUserScore(item);
        })
        return pretendentArray
      }
    })
    return itemList
}
