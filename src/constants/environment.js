const CLIENT_ID = process.env.client_id;
const CLIENT_SECRET = process.env.client_secret;
const FETCH_TOKEN_URI = process.env.FETCH_TOKEN_URI;
const BASE_URL = process.env.BASE_URL;
const AUTHORIZATION_URI = process.env.AUTHORIZATION_URI;
const REDIRECT_URI = process.env.REDIRECT_URI;
const SCOPE = 'user-read-private user-read-email';

export {
    CLIENT_ID,
    CLIENT_SECRET,
    FETCH_TOKEN_URI,
    BASE_URL,
    AUTHORIZATION_URI,
    REDIRECT_URI,
    SCOPE
}