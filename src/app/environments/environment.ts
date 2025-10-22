export const environment = {
    production: false,
    auth0: {
      domain: 'dev-5vp2r4v7ipexzaw3.us.auth0.com',
      clientId: 'kHhnITUZ6Wt4nyG1ipf6sPNSHZ2q8JGT',
      audience: 'https://dev-5vp2r4v7ipexzaw3.us.auth0.com/api/v2/', // this is under APIS on auth0 website
      redirectUri: window.location.origin
    },
    apiUrl: 'http://localhost:8080'
  };
  