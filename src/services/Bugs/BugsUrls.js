import axios from 'axios'
export async function BugIndex(id) {
  const API_URL = `${process.env.REACT_APP_BASE_URL}/${id}/bugs`;
  
  try {
    const response = await axios
     .get(API_URL);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
   } 
   console.log(error)
   return Promise.reject(error)
  }
}

export default BugIndex


