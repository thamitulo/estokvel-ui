// Web build served from AWS CloudFront (`ng build --configuration production,aws`): the UI and the API
// share one origin (CloudFront sends /api/* to the shared Bluetank server, see bluetank-infra
// apps-estokvel.tf), so the API path is relative and there's no CORS. Keep the Auth0 values in step
// with environment.ts. Mobile (Capacitor) builds keep using the other environment files.
export const environment = {
  production: true,
  apiUrl: '/api/',
  auth0: {
    domain: 'dev-5vp2r4v7ipexzaw3.us.auth0.com',
    clientId: 'kHhnITUZ6Wt4nyG1ipf6sPNSHZ2q8JGT',
    audience: 'https://dev-5vp2r4v7ipexzaw3.us.auth0.com/api/v2/',
    redirectUri: window.location.origin
  }
};
