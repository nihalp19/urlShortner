import axios from 'axios';

const sampleIPs = [
  '49.37.249.161', 
  '8.8.8.8',      
  '81.2.69.160',   
  '200.106.141.15', 
  '139.130.4.5'    
];

function getRandomTestIP() {
  const index = Math.floor(Math.random() * sampleIPs.length);
  return sampleIPs[index];
}

export const getCountryFromIP = async (ip) => {
  console.log("Original IP:", ip);

  const isLocalIP = ip === '::1' || ip === '127.0.0.1' || ip.startsWith('::ffff:127.');

  const finalIP = isLocalIP ? getRandomTestIP() : ip;

  console.log("Using IP for lookup:", finalIP);

  try {
    const response = await axios.get(`https://ipapi.co/${finalIP}/json/`);
    return response.data.country_name || 'Unknown';
  } catch (error) {
    console.error('Error fetching IP geolocation:', error);
    return 'Unknown';
  }
};
