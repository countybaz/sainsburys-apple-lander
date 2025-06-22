
export const getRedirectUrl = async (): Promise<string> => {
  const targetCountriesUrl = "https://www.tapplink.co/21468/1084";
  const otherUrl = "https://rewardorbit.com/?type=paypal&value=100&s1=67c90d33e4d4149f9f6c3a5e&t=1";
  
  try {
    // Try to get user's country using a free IP geolocation service
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    console.log('Geolocation data:', data);
    
    // Check if user is from UK, AU, CA, or US
    const targetCountries = ['GB', 'AU', 'CA', 'US'];
    if (targetCountries.includes(data.country_code) || 
        data.country === 'United Kingdom' || 
        data.country === 'Australia' || 
        data.country === 'Canada' || 
        data.country === 'United States') {
      console.log(`${data.country_code} traffic detected, redirecting to target countries URL`);
      return targetCountriesUrl;
    } else {
      console.log('Other country traffic detected, redirecting to other URL');
      return otherUrl;
    }
  } catch (error) {
    console.error('Geolocation detection failed:', error);
    // Fallback to target countries URL if geolocation fails
    return targetCountriesUrl;
  }
};

export const handleGeoRedirect = async () => {
  const url = await getRedirectUrl();
  window.open(url, '_blank');
};
