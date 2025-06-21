
export const getRedirectUrl = async (): Promise<string> => {
  const ukUrl = "https://glitchy.go2cloud.org/aff_c?offer_id=1942&aff_id=25969&source=organic";
  const otherUrl = "https://rewardorbit.com/?type=paypal&value=100&s1=67c90d33e4d4149f9f6c3a5e&t=1";
  
  try {
    // Try to get user's country using a free IP geolocation service
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    console.log('Geolocation data:', data);
    
    // Check if user is from UK
    if (data.country_code === 'GB' || data.country === 'United Kingdom') {
      console.log('UK traffic detected, redirecting to UK URL');
      return ukUrl;
    } else {
      console.log('Non-UK traffic detected, redirecting to other URL');
      return otherUrl;
    }
  } catch (error) {
    console.error('Geolocation detection failed:', error);
    // Fallback to UK URL if geolocation fails
    return ukUrl;
  }
};

export const handleGeoRedirect = async () => {
  const url = await getRedirectUrl();
  window.open(url, '_blank');
};
