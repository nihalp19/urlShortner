import axios from 'axios';

export const getCountryFromIP = async (req) => {
  try {
    const xForwardedFor = req.headers['x-forwarded-for'];
    const ip =
      xForwardedFor?.split(',')[0]?.trim() ||
      req.connection?.remoteAddress ||
      req.socket?.remoteAddress ||
      req.headers['x-real-ip'] ||
      'unknown';

    if (ip === '::1' || ip === '127.0.0.1' || ip === 'unknown') {
      return 'Localhost';
    }

    const { data } = await axios.get(`https://ipapi.co/${ip}/json/`);
    return data?.country_name || 'Unknown';
  } catch (error) {
    console.error('Error fetching IP geolocation:', error.message);
    return 'Unknown';
  }
};
