import axios from 'axios';



export const getCountryFromIP = async (ip) => {
  
  try {
    const response = await axios.get(`https://ipapi.co/${ip}/json/`);
    return response.data.country_name || 'Unknown';
  } catch (error) {
    console.error('Error fetching IP geolocation:', error);
    return 'Unknown';
  }
};
