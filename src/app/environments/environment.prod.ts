export const environment = {
    production: true,
    apiUrl: 'https://api.yourdomain.com/api',
    publicUril: 'https://api.yourdomain.com/public',
    auth0: {
      domain: 'YOUR_TENANT.auth0.com',
      clientId: 'YOUR_UI_CLIENT_ID_PROD',
      audience: 'YOUR_BACKEND_API_IDENTIFIER',
      // Dynamic – works on web, Android WebView (http://localhost) and iOS (capacitor://localhost)
      redirectUri: window.location.origin
    }
  };
