import getData from "../api/requests"
import { JSX } from "react"

import GetUserScore from "./singleUserScore"
import { AxiosResponse } from "axios"

export type Pretendent = {
  id: number,
  username: string,
  pigsAmount: number,
  ticketsAmount: number,
  referrals: number
}

export default function getPretendentArray() {
  const itemList: AxiosResponse | string = getData()
  console.log(itemList)
  if (typeof itemList === "string") {
    const LoadingBar = <span>Loading...</span>
    return [LoadingBar]
  } else {
    const sortListOfPret = itemList?.data.items.sort((a: Pretendent, b: Pretendent) => {
      if (a.pigsAmount !== b.pigsAmount) {
        return b.pigsAmount - a.pigsAmount;
      } else {
        return a.id - b.id
      }
    })
    const pretendentArray: JSX.Element[] = sortListOfPret.map((item: Pretendent, index: number) => {
      return GetUserScore(item, ++index);
    })
    console.log(pretendentArray)
    return pretendentArray
  }
}
