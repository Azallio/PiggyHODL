import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function getData() {
  const { isPending, error, data } = useQuery({
    queryKey: ["pretendentsData"],
    queryFn: () => fetchScoreboard(),
    refetchOnReconnect: false,
})

  if (isPending) return "loading";

  if (error) return 'An error has occurred: ' + error.message;

  return data;
}

async function fetchScoreboard() {
  const res = await axios.get("https://devgame.piggyhodl.xyz/api/User/scoreboard", {
    params: { limit: 10, offset: 0 },
    headers: { Accept: "text/plain" },
  });
  return res;
}

// export async function getBalance() {
//   const res = await axios.get("https://devgame.piggyhodl.xyz/api/Treasury/balance",
//     {
//       headers:{ Accept: "text/plain" }
//     }
//   )
//   console.log(res)
//   return res
// }
