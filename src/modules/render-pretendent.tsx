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
};

export default function getPretendentArray() {
  const itemList: AxiosResponse | string = getData();
  if (typeof itemList !== "string") {
    const sortListOfPret = itemList.data.items.sort((a: Pretendent, b: Pretendent) => {
      if (a.pigsAmount !== b.pigsAmount)
        return b.pigsAmount - a.pigsAmount;
      else
        return a.id - b.id;
    });
    const pretendentArray: JSX.Element[] = sortListOfPret.map((item: Pretendent, index: number) => {
      return GetUserScore(item, ++index);
    });
    const quantityPretendents: number = itemList.data.totalItems;
    return { "Elements": pretendentArray, "quantityPretendents": quantityPretendents };
  }
  else
    return { "Elements": [<span>Loading...</span>], "quantityPretendents": 0 };
};

