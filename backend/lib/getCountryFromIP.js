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


// import axios from 'axios';

// export const getCountryFromIP = async (req) => {
//   try {
//     // Get IP address from request
//     const xForwardedFor = req.headers['x-forwarded-for'];
//     const ip =
//       xForwardedFor?.split(',')[0]?.trim() ||
//       req.ip ||
//       req.connection?.remoteAddress ||
//       req.socket?.remoteAddress ||
//       req.connection?.socket?.remoteAddress ||
//       req.headers['x-real-ip'] ||
//       'unknown';

//     // Handle localhost and invalid IPs
//     if (ip === '::1' || ip === '127.0.0.1' || ip === 'unknown') {
//       return 'Localhost';
//     }

//     // Clean IPv6-mapped IPv4 addresses (like ::ffff:192.168.1.1)
//     const cleanIp = ip.includes('::ffff:') ? ip.split('::ffff:')[1] : ip;

//     // Use a more reliable geolocation service with fallback
//     const { data } = await axios.get(`https://ipapi.co/${cleanIp}/json/`, {
//       timeout: 3000,
//       headers: {
//         'User-Agent': 'axios/1.3.4'
//       }
//     });

//     if (!data || data.error) {
//       // Fallback to ip-api.com if ipapi.co fails
//       const fallbackResponse = await axios.get(`http://ip-api.com/json/${cleanIp}?fields=country`);
//       return fallbackResponse.data?.country || 'Unknown';
//     }

//     return data.country_name || data.country || 'Unknown';
//   } catch (error) {
//     console.error('Error fetching IP geolocation:', error.message);
//     return 'Unknown';
//   }
// };
