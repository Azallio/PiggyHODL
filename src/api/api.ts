import axios from "axios";

export async function getDataOfscoreBoard(Limit: number, Offset: number) {
  const res = await axios.get(`https://devgame.piggyhodl.xyz/api/User/scoreboard`, {
    params: { Limit, Offset },
    headers: { Accept: "text/plain" }
  })
  return res.data
}
// export async function getDataOfscoreBoard(Limit: number, Offset: number) {
//    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
//     headers: {
//       Accept: "text/plain"
//     }
//   })
//   return res
// }