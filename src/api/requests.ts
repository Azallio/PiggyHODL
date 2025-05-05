import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default async function getData() {
  const { isPending, error, data } = useQuery({
    queryKey: ["pretendentsData"],
    queryFn: () => {
      return fetchScoreboard()
    }
  })
  if (isPending) return "loading";

  if (error) return 'An error has occurred: ' + error.message;

  return data;
}

async function fetchScoreboard() {
  const res = await axios.get(
    "https://devgame.piggyhodl.xyz/api/User/scoreboard",
    // "http://localhost:3000/api/items",
    {
      params: {
        limit: 40,
        offset: 0
      },
      headers: {
        Accept: "text/plain"
      }
    }
  );
  return res
};