import axios from 'axios';



export const getCountryFromIP = async () => {
  try {
    const { data } = await axios.get('https://ipapi.co/json/');
    return data?.country_name || 'Unknown';
  } catch (error) {
    console.error('Error fetching IP geolocation:', error.message);
    return 'Unknown';
  }
};
