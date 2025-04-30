import axios from "axios"

const URL = "https://devgame.piggyhodl.xyz/api"


const fetchScoreboard = async () => {
  try {
    const response = await axios.get(
      'https://devgame.piggyhodl.xyz/api/User/scoreboard',
      {
        params: {
          limit: 10,  
          offset: 0  
        },
        headers: {
          Authorization: 'AllioToken',
          Accept: 'application/json'          
        }
      }
    );
    console.log('Данные:', response.data);
  } catch (error: any) {
    console.error('Ошибка:', error.response?.data || error.message);
  }
};


export default fetchScoreboard;