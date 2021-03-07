const client_id = process.env.CLIENT_ID;
const redirect_uri = 'http://localhost:8080/login/route/'; // development
// const redirect_uri = 'http://localhost:3001/login/route/'; // production

const authController = {};

authController.spotifyLogin = (req, res, next) => {
  console.log('spotifyLogin fired...');
  var scopes = 'playlist-modify-public';

  return res.redirect(
    'https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=' +
      client_id +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' +
      encodeURIComponent(redirect_uri)
  );
};

authController.setCookie = (req, res, next) => {
  console.log('setCookie fired...');
  res.cookie('9HWmQ0ME', req.query.code, {
    maxAge: 60 * 5 * 1000,
    // httpOnly: true,
  });
  return next();
};

authController.getToken = (req, res, next) => {
  // send post request
  // url encode client id, client secret, base 64
  // header auth code (cookie), grant type, auth code
  // redirect uri
  // res: access token, token type, expires in, refresh token
};

module.exports = authController;
