import axios from 'axios';

const fallbackCountries = [
  'India',
  'United States',
  'Germany',
  'Canada',
  'Brazil',
  'Australia',
  'France',
  'Japan',
  'Mexico',
  'Italy',
];

const getRandomCountry = () => {
  const randomIndex = Math.floor(Math.random() * fallbackCountries.length);
  return fallbackCountries[randomIndex];
};

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
      return getRandomCountry();
    }

    const { data } = await axios.get(`https://ipapi.co/${ip}/json/`);
    return data?.country_name || getRandomCountry();
  } catch (error) {
    console.error('Error fetching IP geolocation:', error.message);
    return getRandomCountry();
  }
};
