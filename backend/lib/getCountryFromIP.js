import axios from 'axios';

export const getCountryFromIP = async (req) => {
  try {
    const forwarded = req.headers['x-forwarded-for'];
    const ip = forwarded ? forwarded.split(',')[0] : req.socket.remoteAddress;

    const { data } = await axios.get(`https://ipapi.co/${ip}/json/`);
    return data?.country_name || 'Unknown';
  } catch (error) {
    console.error('Error fetching IP geolocation:', error.message);
    return 'Unknown';
  }
};
